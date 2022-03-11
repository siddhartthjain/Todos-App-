
import './App.css';
import Header from './mycomponents/header';
import { Todos } from './mycomponents/todos';
import { Footer } from './mycomponents/footer';
import { Addtodo } from './mycomponents/Addtodo';
import { About } from './mycomponents/about';
import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  let initialtodo
  if (localStorage.getItem('todos') === null) {
    initialtodo = [];
  }
  else {
    initialtodo = JSON.parse(localStorage.getItem('todos'));
  }


  const [todos, setTodos] = useState(initialtodo);


  let onDelete = (todo) => {
    console.log("im on on delete of" + todo.sno);
    setTodos(todos.filter((e) => {
      return e !==todo;
    }))


  }

  const addtodo = (title,desc) => {
    let sno;

    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const itodo = {
      sno: sno,
      title: title,
      desc:desc
    }
    setTodos([...todos, itodo]);


  }
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));

  }, [todos]);


  return (
    <>

      <Router>
        <Header />
        <Switch>
          <Route exact path='/' render={() =>
            <>
              <Addtodo addtodo={addtodo} />
              <Todos todos={todos} onDelete={onDelete} />
              
            </>
          } >
          </Route>
          <Route exact path ="/about"> <About/></Route> 
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
