import React, {useState} from "react";
import './App.css';
import Spinner from "./modules/Spinner/Spinner";
import Panel from "./modules/Panel/Panel";

function App() {
    const [isLoading, setValue] = useState(false);
    let spinner;

    if (isLoading) {
        spinner = <Spinner/>;
    }

    if (localStorage.getItem("user_token") == null) {
        getUserToken();
    }

    return (
        <div className="App">
          {spinner}

          <nav className="navbar navbar-expand-lg navbar-light navbar--theme">
            <div className="container-fluid navbar--theme__container-fluid">
              <span className="navbar--theme__title">To-Do App</span>
            </div>
          </nav>

          <header className="App-header">
              <Panel stateChanger={setValue}/>
          </header>
        </div>
    );
}

function getUserToken() {
    fetch(process.env.REACT_APP_API_URL + '/generate-token', {
        method: 'POST'
    })
        .then(res => {
            if (res.status !== 200) {
                throw Error('Some error occurred')
            }

            return res.json();
        })
        .then(response => {
            localStorage.setItem("user_token", response.token);
        })
        .catch(err => {
            console.log('Error', err);
        });
}

export default App;
