import React from 'react';
import ReactDOM from 'react-dom';
import gallery from './gallery';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<gallery />, div);
});
