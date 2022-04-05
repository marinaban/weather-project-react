import React from "react";
import Submit from "./Submit";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div container>
      <div className="row">
        <div className="col">
          <div className="App">
            <h1 className="title"> WEATHER FORECAST</h1>
            <Submit />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
