import React, { useState } from "react";
import { Card } from "react-bootstrap";

function TodoForm(props) {
  function handleInputChange(event) {
    const value = event.target.value;
    setTodo({
      ...todo,
      [event.target.name]: value
    });
  }

  function handleSumit(event) {
    event.preventDefault();
    props.onAddTodo(todo);
  }

  const [todo, setTodo] = useState({
    title: "",
    responsible: "",
    description: "",
    priority: ""
  });

  return (
    <Card className="ml-4 mr-4 mt-4 w-auto">
      <Card.Header>
        <h3>Input data of new task</h3>
      </Card.Header>
      <Card.Body>
        <form onSubmit={handleSumit}>
          <div className="form-group">
            <label className="text-dark" htmlFor="title">
              <h6>Task Title: </h6>
            </label>
            <input
              className="form-control"
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">
              <h6>Description: </h6>
            </label>
            <input
              className="form-control"
              type="text"
              name="description"
              id="description"
              placeholder="Description"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="responsible">
              <h6>Responsible: </h6>
            </label>
            <input
              className="form-control"
              type="text"
              name="responsible"
              id="responsible"
              placeholder="Responsible"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="priority">
              <h6>Priority: </h6>
            </label>
            <select
              className="form-control form-control-md"
              name="priority"
              onChange={handleInputChange}>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
            <p>
              {JSON.stringify(todo)}
            </p>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Card.Body>
    </Card>
  );
}

export default TodoForm;
