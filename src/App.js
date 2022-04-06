import React from "react";
import Form from "./Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BackgroundImg from "./img/anime.jpg";

function App() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url("${BackgroundImg}")`,
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="row">
        <div className="col">
          <h1 className="title"> Magic weather forecast</h1>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
