import React from 'react';
import ReactDOM from 'react-dom';
import SkillCard from './skillCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SkillCard />, div);
});
