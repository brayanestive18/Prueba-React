import React from "react";

function Navigation({titulo, size}) {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a href="/" className="text-white">
          {titulo}
          <span className="badge badge-pill badge-light ml-2">{size}</span>
        </a>
      </nav>
    </div>
  );
}

export default Navigation;
