// src/components/UserForm.js
import React, { useState } from 'react';

function UserForm({ onSubmit, initialData }) {
    const [name, setName] = useState(initialData?.name || '');
    const [dateOfBirth, setDateOfBirth] = useState(initialData?.date_of_birth || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, date_of_birth: dateOfBirth });
        // Reset form fields
        setName('');
        setDateOfBirth('');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block mb-1">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <div>
                <label htmlFor="dob" className="block mb-1">Date of Birth:</label>
                <input
                    type="date"
                    id="dob"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                {initialData ? 'Update User' : 'Create User'}
            </button>
        </form>
    );
}

export default UserForm;