import React, { useState } from 'react';

interface AddTaskFormProps {
  addTask: (description: string, xp: number) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ addTask }) => {
  const [description, setDescription] = useState('');
  const [xp, setXp] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const xpValue = parseInt(xp, 10);
    if (description.trim() && !isNaN(xpValue) && xpValue > 0 && xpValue <= 1000) {
      addTask(description.trim(), xpValue);
      setDescription('');
      setXp('');
    }
  };

  const xpValue = parseInt(xp, 10);
  const isInvalidXp = !xp.trim() || isNaN(xpValue) || xpValue <= 0 || xpValue > 1000;

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 bg-white/5 rounded-lg">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description..."
        className="sm:col-span-2 bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <input
        type="number"
        value={xp}
        onChange={(e) => setXp(e.target.value)}
        placeholder="XP (1-1000)"
        min="1"
        max="1000"
        className="bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <button
        type="submit"
        className="sm:col-span-3 bg-green-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-green-500 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
        disabled={!description.trim() || isInvalidXp}
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;