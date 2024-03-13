import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AppHeader from './AppHeader';
import Users from './Users';
import EditUser from './EditUser';
import CreateUser from './CreateUser';
import { useSelector, useDispatch } from 'react-redux';

const Platform = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.login.user);
  
  React.useEffect(() => {
    if (sessionStorage.getItem('user')) {
      let user = JSON.parse(sessionStorage.getItem('user'));
      dispatch({ type: 'LOGIN', payload: { user: user } });
    }
}, []);
  
  return (
    <Router>
      <AppHeader />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/users/create" element={<CreateUser />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Platform;