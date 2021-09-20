import React from 'react';
import PropTypes from 'prop-types';
import './TaskInput.css';

const TaskInput = () => (
  <div className="TaskInput d-flex">
      <div className="TaskInput__input_div flex-grow-1">
          <input type="text" className="form-control TaskInput__input"/>
      </div>
      <button className="btn TaskInput__button_add"/>
  </div>
);

TaskInput.propTypes = {};

TaskInput.defaultProps = {};

export default TaskInput;
