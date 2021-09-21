import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import './TaskInput.css';

const TaskInput = ({onAddTask}) => {
    const [taskName, setTaskName] = useState('');

    const handleChange = (event) => {
        setTaskName(event.target.value);
    }

    const addTask = () => {
        addTaskToDb(taskName).then(task => {
            setTaskName("");

            onAddTask(task);
        });
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

async function addTaskToDb(taskName) {
    let task;

    await fetch(process.env.REACT_APP_API_URL + '/tasks', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "task_name": taskName
        })
    })
        .then(res => {
            if (res.status !== 200) {
                throw Error('Some error occurred')
            }

            return res.json();
        })
        .then(response => {
            task = response.task;
        })
        .catch(err => {
            console.log('Error', err);
        });

    return task;
}

TaskInput.propTypes = {};

TaskInput.defaultProps = {};

export default TaskInput;
