import React from 'react';
import UserService from '../services/UserService';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const user = useSelector(state => state.login.user);
    const navigate = useNavigate();
    
    const loadUsers = async (token) => {
        console.log(token);
        const response = await UserService.getUsers(token);
        if (response) {
            setUsers(response);
        } else {
            alert('Unauthorized');
        }
        setLoading(false);
    }
    
    const deleteUser = async (id) => {
        const response = await UserService.deleteUser(user.token, id);
        if (response) loadUsers(user.token);
        else alert('Error');
    }
    
    React.useEffect(() => {
        if (user.token) loadUsers(user.token);
        else navigate('/');
    }, [user]);
    
    if (loading) return <div><h1>Users</h1><p>Loading...</p></div>;
    
    return (
        <div>
            <h1>Users <button className="btn btn-primary" onClick={() => navigate('/users/create')}>Create</button></h1>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>
                                <Link to={`/users/edit/${user.id}`} className="btn btn-primary">Edit</Link>
                                <button onClick={() => deleteUser(user.id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default Users;