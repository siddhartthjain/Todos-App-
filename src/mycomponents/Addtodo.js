
import React, { useState } from 'react';

export const Addtodo = (props) => { 

    const mystyle=
    {
        width:'auto'
    };
    const mystylediv=
    {
        width:"350px",
        margin:"auto"

    }

    
    const [title, setTitle] = useState("");
    const [desc,setDesc]=useState("");

    const submit=(e)=>
    {    e.preventDefault();
        if(title.length===0 || desc.length===0)
        {
            alert("todo cant be empty")
        }
        else{
             props.addtodo(title,desc);
        }
        setTitle("");
        setDesc("");
    }

    return (
        <div className="container  " style={mystylediv} >
            <br />
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label "><span className="h3 font-weight-bold">Add todos here</span></label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="Inputtitle1" aria-describedby="emailHelp" style={mystyle}  />
                     <div id="emailHelp" className="form-text ">Place your title above.</div> 
                </div>
                {/* <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div> */}
                <div className="mb-3">
                    
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="Inputdesc1" aria-describedby="emailHelp" style={mystyle}  />
                     <div id="emailHelp" className="form-text ">Place your desc above.</div> 
                </div>
                
                <button type="submit" className="btn  btn-success">Add</button>
            </form>
        </div>
    )
}
