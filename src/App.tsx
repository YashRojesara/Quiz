import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Quizz from './Component/Quizz';
import Registration from './Component/Registration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/Quiz" element={<Quizz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
