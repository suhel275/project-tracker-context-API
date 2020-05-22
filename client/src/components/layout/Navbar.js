import React, { Fragment, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ProjectContext from '../../context/project/projectContext';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const projectContext = useContext(ProjectContext);

  const { isAuthenticated, logout, employee, loadEmployee } = authContext;
  const { clearProjects } = projectContext;

  useEffect(() => {
    loadEmployee();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
    clearProjects();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {employee && employee.name}</li>
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Project Tracker',
  icon: 'fas fa-file-contract',
};

export default Navbar;
