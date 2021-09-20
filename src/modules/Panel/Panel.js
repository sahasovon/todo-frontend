import React from 'react';
import PropTypes from 'prop-types';
import './Panel.css';
import TaskInput from "../TaskInput/TaskInput";

const Panel = ({stateChanger, ...rest}) => {

    stateChanger(false);

  return (
      <TaskInput/>
  )
};

Panel.propTypes = {};

Panel.defaultProps = {};

export default Panel;
