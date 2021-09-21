import React from 'react';
// import PropTypes from 'prop-types';
import './TaskItem.css';

const TaskItem = ({task, onRemoveTask, onUpdateTask}) => {
    const removeTask = () => {onRemoveTask(task)};
    const updateTask = () => {
        task.is_complete = !task.is_complete;

        onUpdateTask(task)
    };

    if (task.is_new) {
        setTimeout(() => {
            removeTask();
        }, 5*60*1000);
    }

    return (
        <div className="TaskItem d-flex">
            <label className="TaskItem__checkbox">
                <input type="checkbox" defaultChecked={task.is_complete} onClick={updateTask}/>
                <span className="TaskItem__checkbox__checkmark"/>
            </label>

            <div className="TaskItem__text flex-grow-1">
                <span>{task.task_name}</span>
            </div>
            <button className="btn TaskItem__button_cross" onClick={removeTask}/>
        </div>
    )
};

TaskItem.propTypes = {};

TaskItem.defaultProps = {};

export default TaskItem;
