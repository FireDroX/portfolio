import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";

import Background from './components/background/Background';
import StarkLoader from './components/stark_loader/StarkLoader';

import Summary from './pages/summary/Summary';
import About from './pages/about/About';
import Projects from "./pages/projects/Projects";
import Contacts from "./pages/contacts/Contacts";

function App() {
  return (
    <>
      {/* BACKGROUND / DATE -> NO RE RENDER */}
      <Background />

      <Routes>
        <Route path="/" element={<Summary />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />

        {/* REDIRECT WHEN NOT A PATH */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* LOADER / ANIM -> NO RE RENDER */}
      <StarkLoader />
    </>
  );
}

export default App;
