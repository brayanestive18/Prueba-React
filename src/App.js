import React, { setState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import { todos } from "./todos.json";
import TodoForm from "./components/TodoForm";
import { Card } from "react-bootstrap";

function App() {
  function handleAddToDo(todo) {
    console.log("Hola");
    todos.push(todo);
    //todos: [...todos, todo]
    console.log(todos);
    setState({
      todos: [...todos, todo]
    });
  }

  const todoItems = todos.map((todo, i) => {
    return (
      <Card key={i} className="mt-4 mr-2 ml-2 p-0" style={{ width: "11rem" }}>
        <Card.Body className="p-0 border-success">
          <Card.Header>
            <Card.Title>
              {todo.title}
            </Card.Title>
          </Card.Header>
          <Card.Text>
            {todo.description}
          </Card.Text>
          <Card.Text className="rounded bg-primary text-white">
            {todo.responsible}
          </Card.Text>
          <Card.Footer>
            <span
              className="badge badge-pill badge-danger p-2"
              style={{ width: 80 }}>
              {todo.priority}
            </span>
          </Card.Footer>
        </Card.Body>
      </Card>
    );
  });
  return (
    <div className="App">
      <Navigation titulo="Menú" size={todoItems.length} />
      <h1 className="App-title mt-2 text-white">Bienvenido Brayan</h1>
      <div className="row">
        <div className="col-sm-3 col-md-5 col-lg-3 col-xl-3 p-0">
          <TodoForm onAddTodo={handleAddToDo} />
        </div>
        <div className="col-sm-9 col-md-7 col-lg-9 col-xl-9 p-0">
          <div className="row mx-4">
            {todoItems}
          </div>
        </div>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
