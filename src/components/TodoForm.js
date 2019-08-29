import React from "react";

function handleInputChange(event) {
  const { value, name } = event.target;
  console.log(value, name);
  console.log();
  
  React.setState = {
    [name]: value
  };
}

function TodoForm() {
  return (
    <form>
      <label htmlFor="title">Task Title:</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        onChange={handleInputChange}
      />
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        name="description"
        id="description"
        placeholder="Description"
        onChange={handleInputChange}
      />
      <label htmlFor="responsible">Responsible:</label>
      <input
        type="text"
        name="responsible"
        id="responsible"
        placeholder="Responsible"
        onChange={handleInputChange}
      />
      <label htmlFor="priority">priority:</label>
      <input
        type="text"
        name="priority"
        id="priority"
        placeholder="Priority"
        onChange={handleInputChange}
      />
      <p className="text-white">Hola</p>
      <p className="text-white">{JSON.stringify(React.state)}</p>
      <p className="text-white">Hola</p>
    </form>
  );
}

export default TodoForm;
