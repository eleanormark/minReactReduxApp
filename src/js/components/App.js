// src/js/components/App.js
import React from "react";
import List from "./List";
import Form from "./Form";

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h3>Articles</h3>
      <List />
    </div>
    <div className="col-md-4 offset-md-1">
      <h3>Add a new article</h3>
      <Form />
    </div>
  </div>
);

export default App;