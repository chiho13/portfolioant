import React from 'react';
import ReactDOM from 'react-dom';
import expandableWidget from './expandableWidget';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<expandableWidget />, div);
});
