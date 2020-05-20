import React, {Component} from 'react';
import ToDoListContainer from './Components/ToDoListContainer';

import './App.css';


class App extends Component{
  render(){
    return(
      <div className="App">
        <ToDoListContainer />
      </div>
    );
  };
};

export default App;
