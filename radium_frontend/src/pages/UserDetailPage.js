import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserForm from '../components/UserForm';
import { getUser, updateUser } from '../services/api';

function UserDetailPage() {
    const [user, setUser] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchUser();
    }, [id]);

    const fetchUser = async () => {
        const fetchedUser = await getUser(id);
        setUser(fetchedUser);
    };

    const handleUpdateUser = async (userData) => {
        await updateUser(id, userData);
        navigate('/');
    };

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Edit User</h2>
            <UserForm onSubmit={handleUpdateUser} initialData={user} />
        </div>
    );
}

export default UserDetailPage;