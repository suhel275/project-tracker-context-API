import React, { useState, useContext, useEffect } from 'react';
import ProjectContext from '../../context/project/projectContext';

const ProjectForm = () => {
  const projectContext = useContext(ProjectContext);

  const { addProject, updateProject, clearCurrent, current } = projectContext;

  useEffect(() => {
    if (current !== null) {
      setProject(current);
    } else {
      setProject({
        name: '',
        client: '',
        email: '',
        phone: '',
        status: 'uncompleted',
      });
    }
  }, [projectContext, current]);

  const [project, setProject] = useState({
    name: '',
    client: '',
    email: '',
    phone: '',
    status: 'uncompleted',
  });

  const { name, client, email, phone, status } = project;

  const onChange = (e) =>
    setProject({ ...project, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addProject(project);
    } else {
      updateProject(project);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit Project' : 'Add Project'}
      </h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Client'
        name='client'
        value={client}
        onChange={onChange}
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <h5>Project Status</h5>
      <input
        type='radio'
        name='status'
        value='uncompleted'
        checked={status === 'uncompleted'}
        onChange={onChange}
      />{' '}
      Uncompleted{' '}
      <input
        type='radio'
        name='status'
        value='completed'
        checked={status === 'completed'}
        onChange={onChange}
      />{' '}
      Completed
      <div>
        <input
          type='submit'
          value={current ? 'Update Project' : 'Add Project'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ProjectForm;
