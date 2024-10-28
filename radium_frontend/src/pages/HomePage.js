// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import Modal from '../components/Modal';
import { getUsers, createUser, deleteUser } from '../services/api';

function HomePage() {
    const [users, setUsers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const fetchedUsers = await getUsers();
        setUsers(fetchedUsers);
    };

    const handleCreateUser = async (userData) => {
        await createUser(userData);
        fetchUsers();
        setIsModalOpen(false);
    };

    const handleDeleteUser = async (userId) => {
        await deleteUser(userId);
        fetchUsers();
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">User List</h2>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Create New User
                </button>
            </div>
            <UserList users={users} onDelete={handleDeleteUser} />

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2 className="text-2xl font-bold mb-4">Create New User</h2>
                <UserForm onSubmit={handleCreateUser} />
            </Modal>
        </div>
    );
}

export default HomePage;