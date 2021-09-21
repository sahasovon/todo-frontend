import React, {useState} from "react";
import './App.css';
import Spinner from "./modules/Spinner/Spinner";
import Panel from "./modules/Panel/Panel";
import { useCookies } from "react-cookie";

let userToken;

function App() {
    const [isLoading, setValue] = useState(false);
    const [cookies, setCookie] = useCookies(["user_token"]);
    let spinner;

    if (isLoading) {
        spinner = <Spinner/>;
    }

    if (cookies["x-user-token"] == null) {
        getUserToken().then(() => {
            setCookie("x-user-token", userToken);
        });
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

async function getUserToken() {
    await fetch(process.env.REACT_APP_API_URL + '/generate-token', {
        method: 'POST'
    })
        .then(res => {
            if (res.status !== 200) {
                throw Error('Some error occurred')
            }

            return res.json();
        })
        .then(response => {
            userToken = response.token;
        })
        .catch(err => {
            console.log('Error', err);
        });
}

export default App;
