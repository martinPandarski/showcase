import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
    </div>
  );
};

export default App;
