import React from "react";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Book from "./components/Registrarion-Form/Book";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/" element={<AudioPlayer />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/register/registration-Form" element={<Book />}>Registration Form</Route>
    </Routes>

    </BrowserRouter>
  );
}

export default App;