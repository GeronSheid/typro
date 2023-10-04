import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { TemplatesPage } from "./pages/TemplatesPage";
import { ChecksPage } from "./pages/ChecksPage";
import { InspectorsPage } from "./pages/InspectorsPage";
import { EmployeesPage } from "./pages/EmployeesPage";
import { StatisticsPage } from "./pages/StatisticsPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ChecksPage />}/>
        <Route path="/templates" element={<TemplatesPage />}/>
        <Route path="/inspectors" element={<InspectorsPage />}/>
        <Route path="/employees" element={<EmployeesPage />}/>
        <Route path="/statistics" element={<StatisticsPage />}/>
      </Route>
    </Routes>
  );
}

export default App;
