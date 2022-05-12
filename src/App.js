import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Anfitrion from './pages/Anfitrion';
import Experiencia from './pages/Experiencia';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/anfitrion" element={<Anfitrion></Anfitrion>} />
          <Route
            exact
            path="/experiencia"
            element={<Experiencia></Experiencia>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
