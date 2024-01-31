import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  HashRouter,
} from "react-router-dom";
import Upload from "./Upload.jsx";
import Signup from "./Signup.jsx";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
