import React from 'react'

function RenderToDoList(props) {
    const {ToDoList, removeHandler} = props;

    const ToDoItems = ToDoList.map((item) =>{
        return(
            <li key={item.id}>
                {item.task}
                <button onClick={()=>removeHandler(item.id)}>Remove Task</button>
            </li>
        );
    })

    const showList = ( 
        (ToDoList.length) ?
            (<ul className="cleanToDo">
            {ToDoItems}
            </ul>):
            (
                <p>You have no more tasks to complete! Good job! =D</p>
            )
    ); 

    return (
        <div>
            {showList}
        </div>
    )
}

export default RenderToDoList
