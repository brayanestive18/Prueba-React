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
    <div className="card ml-4 mt-4">
      <form className="card-body">
        <h3 className="text-dark mt-4">Input data of new task</h3>
        <div className="form-group mt-4">
          <label className="text-dark" htmlFor="title">
            Task Title:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className="text-dark" htmlFor="description">
            Description:
          </label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Description"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className="text-dark" htmlFor="responsible">
            Responsible:
          </label>
          <input
            type="text"
            name="responsible"
            id="responsible"
            placeholder="Responsible"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className="text-dark" htmlFor="priority">
            priority:
          </label>
          <select className="form-control form-control-lg">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        <p className="text-dark">{JSON.stringify(todo)}</p>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
