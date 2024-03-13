import axios from 'axios';
const url = 'http://localhost:8000/api';

const UserService =  {
    login: async (email, password) => {
        try {
            const response = await axios.post(url + '/login', { email, password });
            return response.data;
        } catch (error) {
            return false;
        }
    },
    getUsers: async (token) => {
        try {
            const response = await axios.get(url + '/users', { headers: { Authorization: `Bearer ${token}` } });
            return response.data;
        } catch (error) {
            return false;
        }
    },
    getUser: async (token, id) => {
        try {
            const response = await axios.get(url + '/users/' + id, { headers: { Authorization: `Bearer ${token}` } });
            return response.data;
        } catch (error) {
            return false;
        }
    },
    setUser: async (token, user) => {
        try {
            const response = await axios.put(url + '/users/' + user.id, user, { headers: { Authorization: `Bearer ${token}` } });
            return response.data;
        } catch (error) {
            return false;
        }
    },
    deleteUser: async (token, id) => {
        try {
            const response = await axios.delete(url + '/users/' + id, { headers: { Authorization: `Bearer ${token}` } });
            return response.data;
        } catch (error) {
            return false;
        }
    },
    newUser: async (token, user) => {
        try {
            const response = await axios.post(url + '/users', user, { headers: { Authorization: `Bearer ${token}` } });
            return response.data;
        } catch (error) {
            return false;
        }
    }
};

export default UserService