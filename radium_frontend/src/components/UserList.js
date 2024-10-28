import React from 'react';
import { Link } from 'react-router-dom';

function UserList({ users, onDelete }) {
    const handleEdit = (userId) => {
        // Navigate to edit page
        window.location.href = `/users/${userId}`;
    };

    const handleDelete = (userId) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            onDelete(userId);
        }
    };

    return (
        <table className="min-w-full bg-white border border-gray-200">
            <thead>
            <tr className="w-full bg-gray-50">
                <th className="py-2 px-4 text-left text-gray-500">ID</th>
                <th className="py-2 px-4 text-left text-gray-500">User</th>
                <th className="py-2 px-4 text-left text-gray-500">Date of birth <i className="fas fa-sort-down"></i></th>
                <th className="py-2 px-4 text-left text-gray-500">Actions</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user => (
                <tr key={user._id} className="border-t border-gray-200">
                    <td className="py-4 px-4 text-gray-700">{user._id}</td>
                    <td className="py-4 px-4 text-gray-700">{user.name}</td>
                    <td className="py-4 px-4 text-blue-500">{user.date_of_birth}</td>
                    <td className="py-4 px-4">
                        <i
                            className="fas fa-pen text-gray-500 mr-4 cursor-pointer"
                            onClick={() => handleEdit(user._id)}
                        ></i>
                        <i
                            className="fas fa-trash text-gray-500 cursor-pointer"
                            onClick={() => handleDelete(user._id)}
                        ></i>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default UserList;