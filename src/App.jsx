import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dictionary from "./pages/Dictionary";
import Keyboard from "./pages/Keyboard";
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
        <Route path="/kb" element={<Keyboard />} />
        <Route path="/ver-hist" element={<VersionHistory />} />
        <Route path="/creds-ress" element={<CreditsAndResources />} />
      </Routes>
    </div>
  )
}

export default App;