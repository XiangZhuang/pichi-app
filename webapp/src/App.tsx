import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pages from "./pages";
import { AppStateProvider } from "./store";
import Modal from "./components/Modal";

function App() {
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
