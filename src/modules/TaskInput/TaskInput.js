import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import './TaskInput.css';
import {useCookies} from "react-cookie";

const TaskInput = ({onAddTask}) => {
    const [cookies] = useCookies(["user_token"]);
    const [taskName, setTaskName] = useState('');

    const handleChange = (event) => {
        setTaskName(event.target.value);
    }

    const addTask = () => {
        if (taskName === "") return;

        const task = {
            id: Math.floor(Math.random() * 10000),
            user_uuid: cookies["x-user-token"],
            task_name: taskName,
            created_at: new Date(),
            updated_at: new Date(),
            is_new: true
        };

        setTaskName("");

        onAddTask(task);
    }

    return (
        <div className="TaskInput d-flex">
            <div className="TaskInput__input_div flex-grow-1">
                <input type="text" className="form-control TaskInput__input" value={taskName} onChange={handleChange}/>
            </div>
            <button className="btn TaskInput__button_add" onClick={addTask}/>
        </div>
    )
};

TaskInput.propTypes = {};

TaskInput.defaultProps = {};

export default TaskInput;
