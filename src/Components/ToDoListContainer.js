import React, { Component } from 'react';
import AddToDo from './AddToDo';
import RenderToDoList from './RenderToDoList';

class ToDoListContainer extends Component {
    constructor() {
        super();
        this.state = {
             ToDoList: [
                 {id: 1, task: "Clean my room"}, 
                 {id:2, task: "Wash the dishes"},
                 {id:3, task: "Make a sandwhich"}
                ],
        }
    }

    AddToDoTask = (ToDoTask) =>{
        let id = (Math.floor(Math.random()*100)) + this.state.ToDoList.length
        let newToDoList = [
            ...this.state.ToDoList,
            {id: id, task: ToDoTask}
        ]
        return(
            this.setState({
                ToDoList: newToDoList
            })
        );

    }

    removeToDo = (id) => {
        let updatedToDoList = this.state.ToDoList.filter((item) => {
            return((item.id !== id))
        })

        return(
            this.setState({
                ToDoList: updatedToDoList,
            })
        );
    }

    render() {
        return (
            <div>
                <h1>Carlos' ToDoList</h1>
                <RenderToDoList ToDoList={this.state.ToDoList}  removeHandler = {this.removeToDo}/>
                <AddToDo ToDoTask={this.AddToDoTask}/>
            </div>
        )
    }
}

export default ToDoListContainer;
