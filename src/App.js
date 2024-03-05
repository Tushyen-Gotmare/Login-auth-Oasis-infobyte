import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
// import Login from "./components/Login/Login";


import Signup from "./components/Signup/Signup";

import { auth } from "./firebase";

// import "./App.css";
const LazyLogin = React.lazy(() => import('./components/Login/Login')); 

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<React.Suspense fallback="Loading..."><LazyLogin /></React.Suspense>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home name={userName} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;