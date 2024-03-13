import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import UserService from '../services/UserService';

const EditUser = () => {
    const user = useSelector(state => state.login.user);
    const [editUser, setEditUser] = React.useState({name: '', email: '', password: ''});
    const params = useParams()
    const navigate = useNavigate();
    
    React.useEffect(() => {
        if (!user.token) {
            navigate('/');
        }
    }, [user]);
    
    const createUser = async (event) => {
        event.preventDefault();
        const response = await UserService.newUser(user.token, editUser);
        if (response) {
            alert('Saved');
            navigate('/users');
        } else alert('Error');
    }
    
    return (
        <div>
            <h1>Edit User</h1>
            <form className='form'>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={editUser.name}
                        onChange={e => setEditUser({...editUser, name: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        value={editUser.email}
                        onChange={e => setEditUser({...editUser, email: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={editUser.username}
                        onChange={e => setEditUser({...editUser, username: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={editUser.password}
                        onChange={e => setEditUser({...editUser, password: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <button className='btn btn-primary' onClick={createUser}>Create</button>
                </div>
            </form>
        </div>  
    )
}

export default EditUser;