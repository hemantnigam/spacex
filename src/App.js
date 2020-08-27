import React from "react";
import "./App.scss";
import Main from "./Components/Main/Main";
import SideBar from "./Components/SideBar/SideBar";
import { Provider } from "react-redux";
import store from "./Components/Store/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>SpaceX Launch Programs</header>
        <div className="main-section">
          <SideBar />
          <Main />
        </div>
        <footer>
          <span className="developed-by">Developed by:</span>{" "}
          <span className="name">Hemant Nigam</span>
        </footer>
      </div>
    </Provider>
  );
}

export default App;
