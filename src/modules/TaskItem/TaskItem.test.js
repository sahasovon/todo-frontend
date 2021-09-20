import React from 'react';
import ReactDOM from 'react-dom';
import TaskItem from './TaskItem';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});