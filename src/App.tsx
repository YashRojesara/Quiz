import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QuizComponent from './Component/QuizComponent';
import Registration from './Component/Registration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/Quiz" element={<QuizComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
