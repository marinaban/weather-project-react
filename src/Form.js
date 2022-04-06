import React from "react";
import "./Form.css";

export default function Submit() {
  return (
    <form className="form">
      <div className="input-group rounded w-50">
        <input
          type="search"
          className="form-control rounded  search"
          style={{ backgroundColor: "rgb(191, 179, 76, 0.6)" }}
          placeholder="Enter a city..."
        />

        <button type="submit" className="btn btn-outline-secondary rounded">
          Search
        </button>
      </div>
    </form>
  );
}
