import React, { useState, useEffect, useMemo } from 'react';
import { Student } from './types';
import AddStudentForm from './components/AddStudentForm';
import StudentCard from './components/StudentCard';
import { PlusCircleIcon, TrophyIcon } from './components/Icons';
import { db } from './firebase';
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const studentsCollectionRef = collection(db, 'students');
    const unsubscribe = onSnapshot(studentsCollectionRef, (snapshot) => {
      const studentsData = snapshot.docs.map(doc => {
        const data = doc.data();
        // Ensure the student object conforms to the Student type, with defaults.
        return {
          id: doc.id,
          name: data.name || 'Unnamed Student',
          totalXp: data.totalXp || 0,
          tasks: data.tasks || [], // IMPORTANT: Default tasks to an empty array
        };
      }) as Student[];
      // Sort by name for consistent ordering
      studentsData.sort((a, b) => a.name.localeCompare(b.name));
      setStudents(studentsData);
    }, (error) => {
      console.error("Error fetching students from Firestore:", error);
    });

    return () => unsubscribe();
  }, []);

  const addStudent = async (name: string) => {
    try {
      await addDoc(collection(db, 'students'), {
        name,
        totalXp: 0,
        tasks: [],
      });
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const deleteStudent = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'students', id));
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const updateStudent = async (updatedStudent: Student) => {
    try {
      const { id, ...studentData } = updatedStudent;
      if (!id) {
        console.error("Cannot update student without an ID.");
        return;
      }
      const studentDocRef = doc(db, 'students', id);
      await updateDoc(studentDocRef, studentData);
    } catch (error)
    {
      console.error("Error updating student:", error);
    }
  };
  
  const leader = useMemo(() => {
    if (students.length === 0) {
      return null;
    }
    return students.reduce((max, current) => current.totalXp > max.totalXp ? current : max);
  }, [students]);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-purple-400 tracking-wider">Niggas Leveling 🔥</h1>
          <p className="text-gray-400 mt-2">Grind to your peak! You only have 1 life</p>
        </header>
        
        <div className="mb-12 max-w-md mx-auto p-4 bg-gray-800/50 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-4 flex items-center justify-center text-gray-200">
            <PlusCircleIcon className="w-6 h-6 mr-2 text-green-400"/>
            Add New Student
          </h2>
          <AddStudentForm addStudent={addStudent} />
        </div>

        {leader && (
          <div className="text-center mb-12 -mt-4 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 to-purple-500/10 border border-yellow-400/30 text-yellow-300 rounded-full px-6 py-3 shadow-lg">
                <TrophyIcon className="w-6 h-6" />
                <p className="font-semibold text-lg tracking-wide">
                    <span className="font-bold text-white">{leader.name}</span> is on the lead!
                </p>
            </div>
          </div>
        )}
        
        {students.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {students.map(student => (
              <StudentCard 
                key={student.id} 
                student={student} 
                updateStudent={updateStudent} 
                deleteStudent={deleteStudent} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-8 bg-gray-800/50 rounded-lg border-2 border-dashed border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-300">No Students Yet</h2>
            <p className="text-gray-500 mt-2">Add your first student to begin tracking their progress!</p>
          </div>
        )}
      </div>
       <footer className="text-center mt-12 text-gray-600 text-sm">
        <p>Created by a Real!!.... Nigga.</p>
      </footer>
    </div>
  );
};

export default App;