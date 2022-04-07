import React from "react";
import "./Form.css";

export default function Submit() {
  return (
    <form className="form">
      <div className="input-group rounded w-50">
        <input
          type="search"
          className="form-control rounded search"
          placeholder="Enter a city..."
          style={{
            backgroundColor: "rgb(191, 179, 76, 0)",
            color: "whitesmoke",
          }}
        />

        <button
          type="submit"
          className="btn btn-outline-light rounded"
          style={{ border: "none", backgroundColor: "none" }}
        >
          Search
        </button>
      </div>
    </form>
  );
}
