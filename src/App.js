import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Routes >
          <Route path="/jobs/:id" element={<JobsPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes >
      </div>
    </Router>
  );
}

export default App;