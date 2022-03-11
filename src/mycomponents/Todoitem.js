import React from 'react';
import  './Todoitem.css';



export const Todoitem = (props) => {


    

    return (
        // <div className="todositem">
        //     {props.ptodo.sno}
        //     <p>{props.ptodo.title}</p>
        //     <button className="btn btn-danger" onClick={()=>{props.onDelete(props.ptodo)}}>Delete</button>
        //     <hr />
        // </div>
    

    
    
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.ptodo.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.ptodo.desc}</h6>
                <button className="btn btm-sm btn-danger" onClick={() => { props.onDelete(props.ptodo) }} >Delete</button>
                <button className="btn btm-sm btn-primary" onClick={() => { props.onupdate(props.sno) }} >Update</button>
            </div>
        </div>
    
        
     

    )
}

