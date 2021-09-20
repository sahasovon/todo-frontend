import React from 'react';
import PropTypes from 'prop-types';
import './TaskItem.css';

const TaskItem = () => (
  <div className="TaskItem d-flex">
      <label className="TaskItem__checkbox">
          <input type="checkbox"/>
          <span className="TaskItem__checkbox__checkmark"/>
      </label>

      <div className="TaskItem__text flex-grow-1">
          <span>Text Text Text Text Text </span>
      </div>
    <button>+</button>
    <button>X</button>
  </div>
);

TaskItem.propTypes = {};

TaskItem.defaultProps = {};

export default TaskItem;
