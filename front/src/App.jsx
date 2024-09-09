import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Accueil from './Page/Accueil/Accueil.jsx';
import PageDetail from './Page/PageDetail/PageDetail.jsx';
import MyTabStyle from './Context/ContextStyle.jsx';

//recuperation de local storage
export const ContextJwt = createContext(localStorage.getItem("tokens"));

export const Admin = createContext(localStorage.getItem("admin"));


export default function App() {
  const [redirection, setRedirection] = useState(null);
  const handleRedirection = (nouvelleURL) => {
    setRedirection(nouvelleURL);
  };

  return (<MyTabStyle>
    <Router>
      {redirection && <Navigate to={redirection} />}
      <Routes>
        <Route path="/" element={<Accueil onRedirection={handleRedirection} />} />
        <Route path="/page-detail/:id" element={<PageDetail />} />
      </Routes>
    </Router>
    </MyTabStyle>
  );
}
