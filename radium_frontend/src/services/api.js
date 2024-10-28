const API_URL = 'http://localhost:8000';

export const getUsers = async () => {
    const response = await fetch(`${API_URL}/users`);
    return response.json();
};

export const getUser = async (id) => {
    const response = await fetch(`${API_URL}/users/${id}`);
    return response.json();
};

export const createUser = async (userData) => {
    const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
    });
    return response.json();
};

export const updateUser = async (id, userData) => {
    const response = await fetch(`${API_URL}/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
    });
    return response.json();
};

export const deleteUser = async (id) => {
    await fetch(`${API_URL}/users/${id}`, { method: 'DELETE' });
};