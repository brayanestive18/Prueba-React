import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import { todos } from "./todos.json";
import TodoForm from "./components/TodoForm";

function App() {
  const todoItems = todos.map((todo, i) => {
    return (
      <div className="col-xl-3 col-lg-4 col-md-6 h-100 w-auto" key={i}>
        <div className="card border-success mt-4">
          <div className="card-header">
            <h3 className="text-dark">{todo.title}</h3>
          </div>
          <div className="card-body">
            <p className="text-dark">{todo.description}</p>
            <p className="rounded bg-primary text-white">{todo.responsible}</p>
          </div>
          <div className="card-footer">
            <span className="badge badge-pill badge-danger p-2" style={{width: 80}}>
              {todo.priority}
            </span>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="App">
      <Navigation titulo="Menú" size={todoItems.length} />
      <h1 className="App-title mt-2">Bienvenido Brayan</h1>
      <div>
        <div className="row no-gutters">
          <div className="col-sm-3 col-md-5 col-lg-3 col-xl-3">
            <TodoForm></TodoForm>
          </div>
          <div className="col-sm-9 col-md-7 col-lg-9 col-xl-9">
            <div className="container">
              <div className="row">{todoItems}</div>
            </div>
          </div>
        </div>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
