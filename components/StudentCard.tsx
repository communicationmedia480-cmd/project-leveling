import React from 'react';
import { Student, Task } from '../types';
import { getRankInfo } from '../utils/rankUtils';
import AddTaskForm from './AddTaskForm';
import ProgressBar from './ProgressBar';
import RankDisplay from './RankDisplay';
import { TrashIcon } from './Icons';

interface StudentCardProps {
  student: Student;
  updateStudent: (student: Student) => void;
  deleteStudent: (id: string) => void;
}

const StudentCard: React.FC<StudentCardProps> = ({ student, updateStudent, deleteStudent }) => {
  // Defensively ensure 'tasks' is always an array to prevent runtime errors.
  const tasks = student.tasks || [];

  // Refactored to use a centralized and robust utility function for rank calculations.
  // This prevents crashes from invalid XP data.
  const rankInfo = React.useMemo(() => getRankInfo(student.totalXp), [student.totalXp]);
  
  const addTask = (description: string, xp: number) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      description,
      xp,
      isCompleted: false,
    };
    updateStudent({ ...student, tasks: [...tasks, newTask] });
  };

  const toggleTask = (taskId: string) => {
    let xpChange = 0;
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        xpChange = task.isCompleted ? -task.xp : task.xp;
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    updateStudent({
      ...student,
      tasks: updatedTasks,
      totalXp: (Number(student.totalXp) || 0) + xpChange,
    });
  };

  const deleteTask = (taskId: string) => {
    const taskToDelete = tasks.find(task => task.id === taskId);
    let newTotalXp = Number(student.totalXp) || 0;
    if (taskToDelete && taskToDelete.isCompleted) {
      newTotalXp -= taskToDelete.xp;
    }
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    updateStudent({ ...student, tasks: updatedTasks, totalXp: newTotalXp });
  };

  // The progress bar color is now safely derived from the rank's predefined gradient.
  const progressBarColor = `bg-gradient-to-r ${rankInfo.rank.progressGradient}`;

  return (
    <div className="bg-gray-800/70 rounded-xl shadow-2xl flex flex-col transition-all duration-300 hover:shadow-purple-500/20 hover:ring-2 hover:ring-purple-600">
      {/* Header */}
      <div className="p-5 border-b border-gray-700">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold text-white">{student.name}</h3>
          </div>
          <button 
            onClick={() => deleteStudent(student.id)} 
            className="text-gray-500 hover:text-red-500 transition-colors p-1.5 rounded-full hover:bg-red-500/10"
            aria-label={`Delete student ${student.name}`}
          >
            <TrashIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-center mb-1">
            <RankDisplay rank={rankInfo.rank} subLevel={rankInfo.subLevel} />
            {rankInfo.isMaxLevel ? (
              <span className="font-mono text-sm font-bold text-yellow-300">
                MAX LEVEL
              </span>
            ) : (
              <span className="text-xs font-mono text-gray-400">
                {rankInfo.currentLevelXp} / {rankInfo.xpForNextSublevel} XP
              </span>
            )}
          </div>
          <ProgressBar progress={rankInfo.progressToNextSublevel} color={progressBarColor} />
        </div>
      </div>

      {/* Task List */}
      <div className="p-5 flex-grow">
        <h4 className="font-semibold text-lg mb-3 text-gray-300">Tasks</h4>
        <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
          {tasks.length > 0 ? tasks.map(task => (
            <div key={task.id} className="flex items-center justify-between bg-gray-900/50 p-3 rounded-lg">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.isCompleted}
                  onChange={() => toggleTask(task.id)}
                  className="w-5 h-5 accent-green-500 bg-gray-700 border-gray-600 rounded cursor-pointer focus:ring-2 focus:ring-green-400"
                />
                <label className={`ml-3 ${task.isCompleted ? 'line-through text-gray-500' : 'text-gray-200'}`}>
                  {task.description}
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`font-mono text-sm px-2 py-0.5 rounded-full ${task.isCompleted ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/10 text-yellow-400'}`}>
                  {task.xp} XP
                </span>
                <button 
                  onClick={() => deleteTask(task.id)} 
                  className="text-gray-600 hover:text-red-400 transition-colors"
                  aria-label={`Delete task: ${task.description}`}
                >
                  <TrashIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          )) : (
            <p className="text-gray-500 text-center py-4">No tasks assigned yet.</p>
          )}
        </div>
      </div>

      {/* Add Task Form */}
      <div className="p-5 border-t border-gray-700 bg-gray-800/50 rounded-b-xl">
        <AddTaskForm addTask={addTask} />
      </div>
    </div>
  );
};

export default StudentCard;