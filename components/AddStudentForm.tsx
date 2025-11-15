
import React, { useState } from 'react';

interface AddStudentFormProps {
  addStudent: (name: string) => void;
}

const AddStudentForm: React.FC<AddStudentFormProps> = ({ addStudent }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      addStudent(name.trim());
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter student's name..."
        className="flex-grow bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow"
      />
      <button
        type="submit"
        className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-purple-500 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
        disabled={!name.trim()}
      >
        Add Student
      </button>
    </form>
  );
};

export default AddStudentForm;
