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

export default App;
