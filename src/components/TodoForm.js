import React, { useState } from "react";

function TodoForm() {
  function handleInputChange(event) {
    const value = event.target.value;
    setTodo({
      ...todo,
      [event.target.name]: value
    });
  }

  const [todo, setTodo] = useState({
    title: "",
    responsible: "",
    description: "",
    priority: ""
  });

  return (
    <div className="card ml-3 mt-4 mr-3">
      <form className="card-body">
        <h3 className="text-dark mt-4 mb-4">Input data of new task</h3>
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
          <label className="text-dark" htmlFor="description">
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
          <label className="text-dark" htmlFor="responsible">
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
          <label className="text-dark" htmlFor="priority">
            <h6>Priority: </h6>
          </label>
          <select className="form-control form-control-md" name='priority' onChange={handleInputChange}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <p className="text-dark">{JSON.stringify(todo)}</p>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
