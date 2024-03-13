import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Navigation = () => {
  const user = useSelector(state => state.login.user);
  if( !user.token ) {
    return null;
  } else {
    return (
      <nav className="navigation">
        <ul className="menu">
          <li key="home">
            <Link to="/">Home</Link>
          </li>
          <li key="users">
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Navigation;