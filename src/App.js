import React from "react";
import Header from "./layout/header";
import NormalRouter from "./App.router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <section className="routing">
        <NormalRouter />
      </section>
    </BrowserRouter>
  );
}

export default App;
