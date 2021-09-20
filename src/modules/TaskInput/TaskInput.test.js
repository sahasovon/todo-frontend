import React from 'react';
import ReactDOM from 'react-dom';
import TaskInput from './TaskInput';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});