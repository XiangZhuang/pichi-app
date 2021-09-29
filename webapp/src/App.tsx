import React from "react";
import Header from "./components/Header";
import Pages from "./pages";
import { ping } from "./common/api";

function App() {
  ping("").then((res) => console.log(res));

  return (
    <div className="App">
      <Header />
      <Pages />
    </div>
  );
}

export default App;
