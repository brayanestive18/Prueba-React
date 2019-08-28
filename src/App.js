import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import { todos } from "./todos.json";

function App() {
  const todoItems = todos.map((todo, i) => {
    return (
      <div className="col-md-4" key={i}>
        <div
          className="card border-success mt-4"
          // style={{ width: "200px" }}
          // key={i}
        >
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
      <div className="container ">
        <div className="row mt-4">{todoItems}</div>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
