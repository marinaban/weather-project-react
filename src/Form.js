import React from "react";
import "./Form.css";

export default function Submit() {
  return (
    <form className="form">
      <div className="input-group rounded w-50">
        <input
          type="text"
          className="form-control rounded search"
          placeholder="Enter a city..."
          style={{
            backgroundColor: "rgba(114, 113, 109, 0.308)",
            color: "rgba(255, 255, 225, 0.823)",
            border: "none",
            boxShadow:
              "0px 0px 5px rgba(0,0,0,0.6), inset 0px 0px 8px rgba(0,0,0,0.5) ",
          }}
        />

        <button
          type="submit"
          className="btn btn-link"
          style={{
            textDecoration: "none",
            color: "rgba(255, 255, 0, 0.723)",
            textShadow: "3px 3px rgba(0,0,0,0.3)",
          }}
        >
          Search
        </button>
      </div>
    </form>
  );
}
