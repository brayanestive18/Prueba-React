import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import { todos } from "./todos.json";
import TodoForm from "./components/TodoForm";

function App() {
  const todoItems = todos.map((todo, i) => {
    return (
      <div className="col-sm-4" key={i}>
        <div className="card border-success mt-4">
          <div className="card-header">
            <h3 className="text-dark">{todo.title}</h3>
          </div>
          <div className="card-body">
            <p className="text-dark">{todo.description}</p>
            <p className="rounded bg-primary text-white">{todo.responsible}</p>
          </div>
          <div className="card-footer">
            <span className="badge badge-pill badge-danger p-2">
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
          <div className="col-auto">
            <TodoForm></TodoForm>
          </div>
          <div className="col-auto">
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
