import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pages from "./pages";
import { ping } from "./common/api";

function App() {
  ping("").then((res) => console.log(res));

  return (
    <div className="App">
      <Header />
      <Pages />
      <Footer />
    </div>
  );
}

export default App;
