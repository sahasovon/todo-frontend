import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import './Panel.css';
import TaskInput from "../TaskInput/TaskInput";
import TaskItem from "../TaskItem/TaskItem";

const Panel = ({stateChanger, ...rest}) => {

  const [taskItems, updateTasks] = useState([]);

  const showSpinner = () => stateChanger(true);
  const hideSpinner = () => stateChanger(false);

  const addTask = (task) => {
      const updatedTasks = [
          ...taskItems,
          task
      ];

      updateTasks(updatedTasks);
  };

  const updateTask = task => {
      const updatedTasks = taskItems.map(t => (t.id === task.id) ? task : t);

      updateTasks(updatedTasks);
  }

  const removedTask = task => {
      const updatedTasks = taskItems.filter(t => t.id !== task.id);

      updateTasks(updatedTasks);
  }

  const saveTasks = () => {
      showSpinner();

      saveTasksDb(taskItems)
          .then(() => {
              hideSpinner();
          });
  }

  const loadTasks = () => {
      showSpinner();

      loadTasksFromDb()
          .then(tasks => {
              updateTasks(tasks);

              hideSpinner();
          });
  }

  const clearTasks = () => {
      showSpinner();

      clearTasksFromDb()
          .then(tasks => {
              updateTasks(tasks);

              hideSpinner();
          });
  }

  return (
      <div className="Panel container">
          <div className="row">
              <div className="col"/>
              <div className="col-12 col-md-8">
                  <TaskInput
                    onAddTask={addTask}
                  />

                  {
                      taskItems.map(tim =>
                        <TaskItem
                            key={tim.id}
                            task={tim}
                            onRemoveTask={removedTask}
                            onUpdateTask={updateTask}
                        />
                      )
                  }

                  <div className="Panel__button_group">
                      <button className="btn btn-primary Panel__button" onClick={saveTasks}>Save</button>
                      <button className="btn btn-primary Panel__button" onClick={loadTasks}>Load</button>
                      <button className="btn btn-primary Panel__button" onClick={clearTasks}>Clear</button>
                  </div>
              </div>
              <div className="col"/>
          </div>
      </div>
  )
};

async function saveTasksDb(taskItems) {
    let tasks = [];

    await fetch(process.env.REACT_APP_API_URL + '/tasks/save', {
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "tasks": taskItems
        })
    })
        .then(res => {
            if (res.status !== 200) {
                throw Error('Some error occurred')
            }

            return res.json();
        })
        .then(response => {
            tasks = response.tasks;
        })
        .catch(err => {
            console.log('Error', err);
        });

    return tasks;
}

async function loadTasksFromDb() {
    let tasks = [];

    await fetch(process.env.REACT_APP_API_URL + '/tasks', {
        method: 'GET',
        credentials: 'include'
    })
        .then(res => {
            if (res.status !== 200) {
                throw Error('Some error occurred')
            }

            return res.json();
        })
        .then(response => {
            tasks = response.tasks;
        })
        .catch(err => {
            console.log('Error', err);
        });

    return tasks;
}

async function clearTasksFromDb() {
    await fetch(process.env.REACT_APP_API_URL + '/tasks/clear', {
        method: 'DELETE',
        credentials: 'include'
    })
        .then(res => {
            if (res.status !== 200) {
                throw Error('Some error occurred')
            }

            return res.json();
        })
        .catch(err => {
            console.log('Error', err);
        });

    return [];
}

Panel.propTypes = {};

Panel.defaultProps = {};

export default Panel;
