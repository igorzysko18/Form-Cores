import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageForm from '../Pages/Form/index';

const Routering: React.FC = () => {
  return ( 
    <Router>
      <Routes>
        <Route path="*" element={<PageForm />} />
      </Routes>
    </Router>
  );
}

export default Routering;
