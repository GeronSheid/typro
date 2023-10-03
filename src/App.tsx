import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { TemplatesPage } from "./pages/TemplatesPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/templates" element={<TemplatesPage />}/>
        <Route path="/inspectors" element={<Layout />}/>
        <Route path="/employees" element={<Layout />}/>
        <Route path="/statistics" element={<Layout />}/>
      </Route>
    </Routes>
  );
}

export default App;
