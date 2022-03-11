import React from 'react'
import { Todoitem } from './Todoitem'

export const Todos = (props) => {

    const mystyle={
       margin:"3px auto"
    }

 
    return (
        <div className="container">
            <br />
            <h3 className="font-bold-strong">My todos list</h3>

            <div className="conatiner" style={mystyle}>
               {props.todos.length===0? <p className="no-item">{"no todo to display"}</p>:
               

                props.todos.map((ptodo)=>
                   {
                       return(<Todoitem ptodo={ptodo} key={ptodo.sno} onDelete={props.onDelete}/>)
                   })
                   
               

                  
                
               
            }
            </div>
            



        </div>
    )
}
