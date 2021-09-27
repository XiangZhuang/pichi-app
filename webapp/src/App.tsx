import React from "react";
import Pages from "./pages";
import { ping } from "./common/api";

function App() {
  ping("").then((res) => console.log(res));

  return (
    <div className="App">
      <Pages />
    </div>
  );
}

export default App;
