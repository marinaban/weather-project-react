import React from "react";
import "./Form.css";

export default function Submit() {
  return (
    <div className="form">
      <input
        type="search"
        className="form-control search"
        placeholder="Enter a city..."
      />
      <button type="submit" className="btn btn-primary">
        Click me!
      </button>
    </div>
  );
}
