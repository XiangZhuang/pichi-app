import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pages from "./pages";
import { ping } from "./common/api";
import { AppStateProvider } from "./store";
import Modal from "./components/Modal";

function App() {
  ping("").then((res) => console.log(res));

  return (
    <AppStateProvider>
      <Modal />
      <div className="App">
        <Header />
        <Pages />
        <Footer />
      </div>
    </AppStateProvider>
  );
}

export default App;
