import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dictionary from "./pages/Dictionary";
import VersionHistory from "./pages/VersionHistory"
import CreditsAndResources from "./pages/CreditsAndResources";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dict" element={<Dictionary />} />
        <Route path="/version-hist" element={<VersionHistory />} />
        <Route path="/credits-resources" element={<CreditsAndResources />} />
      </Routes>
    </div>
  )
}

export default App;