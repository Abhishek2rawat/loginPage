import React, { useState } from 'react';
import Signup from "./components/signup.jsx";
import Login from "./components/Login.jsx";
import { useNavigate , Navigate} from 'react-router-dom';

import {Routes ,Route} from "react-router-dom";
const App = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to="/login" replace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App;
