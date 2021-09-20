import React from 'react';
import PropTypes from 'prop-types';
import './Panel.css';
import TaskInput from "../TaskInput/TaskInput";
import TaskItem from "../TaskItem/TaskItem";

const Panel = ({stateChanger, ...rest}) => {

  stateChanger(false);

  return (
      <div className="Panel container">
          <div className="row">
              <div className="col"/>
              <div className="col-12 col-md-8">
                  <TaskInput/>

                  <TaskItem/>
                  <TaskItem/>
                  <TaskItem/>
                  <TaskItem/>

                  <div className="Panel__button_group">
                      <button className="btn btn-primary Panel__button">Save</button>
                      <button className="btn btn-primary Panel__button">Load</button>
                      <button className="btn btn-primary Panel__button">Clear</button>
                  </div>
              </div>
              <div className="col"/>
          </div>
      </div>
  )
};

Panel.propTypes = {};

Panel.defaultProps = {};

export default Panel;
