import React from 'react';
import Projects from '../projects/Projects';
import ProjectForm from '../projects/ProjectForm';
import ProjectFilter from '../projects/ProjectFilter';

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <ProjectForm />
      </div>
      <div>
        <ProjectFilter />
        <Projects />
      </div>
    </div>
  );
};

export default Home;
