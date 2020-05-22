import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProjectContext from '../../context/project/projectContext';

const ProjectItem = ({ project }) => {
  const projectContext = useContext(ProjectContext);
  const { deleteProject, setCurrent, clearCurrent } = projectContext;

  const { _id, name, client, email, phone, status } = project;

  const onDelete = () => {
    deleteProject(_id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (status === 'completed' ? 'badge-success' : 'badge-primary')
          }
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {client && (
          <li>
            <i class='fas fa-user' /> {client}
          </li>
        )}
        {email && (
          <li>
            <i className='fas fa-envelope-open' /> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone' /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(project)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectItem;
