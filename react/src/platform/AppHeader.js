import React from 'react';
import Navigation from './Navigation';
import { useSelector, useDispatch } from 'react-redux';
import UserService from '../services/UserService';

const AppHeader = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.login.user);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    const handleLogin = async (event) => {
        event.preventDefault();
        const data = await UserService.login(email, password);
        if (data) {
            let logged = data.user;
            logged.token = data.token;
            dispatch({
                type: 'LOGIN',
                payload: { 
                    user: logged
                }
            });
            sessionStorage.setItem('user', JSON.stringify(logged));
        } else {
            alert('Login inválido');
        }
    }
    const handleLogout = (event) => {
        event.preventDefault();
        console.log(user);
        dispatch({ type: 'LOGOUT' });
    }
    
    const showDiv = () => {
        if( user.token ){
            return  <div className='logout'>
                <small className='email'>{user.email}</small>
                <button onClick={handleLogout} className='btn btn-primary' type="submit">Logout</button>
            </div>;
        } else {
            return <div className='login'>
                <form className='form-inline'>
                    <div className="form-group mb-2">
                        <input value={email} onChange={e => setEmail(e.target.value)} className='form-control' type="text" name="email" id="email" placeholder="User or Mail" />
                        <input value={password} onChange={e => setPassword(e.target.value)} className='form-control' type="password" name="password" id="password" placeholder="Password" />
                        <button onClick={handleLogin} className='btn btn-primary' type="submit">Login</button>
                    </div>
                </form>
            </div>;
        }
    }
    
    return <header className="App-header">
            <p className='logo'>
                <a href="#">
                CRUD with Laravel / React
                </a>
            </p>
            <Navigation />
            {showDiv()}
        </header>;
};

export default AppHeader;