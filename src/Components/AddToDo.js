import React, {Component} from "react";

class AddToDo extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             ToDoTask: "",
        }
    }
    changeHandler = (e) =>{
        this.setState({
            ToDoTask: e.target.value,
        })
    }

    submitHandler = (e)=>{
        e.preventDefault();
        this.props.ToDoTask(this.state.ToDoTask);
    }
    render(){
        return(
            <form onSubmit={this.submitHandler}>
                <label>Please type in a task: </label>
                <input type="text" value={this.state.ToDoTask} onChange={this.changeHandler}/>
                <button>Submit</button>
            </form>
        );
    }
};

export default AddToDo;