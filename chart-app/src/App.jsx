import "./App.css";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import ChartPage from "./components/ChartPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div className="container">
      <Sidebar />{" "}
      {/* Sidebar remains visible on all routes, but not on mobile view */}
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/:chartId" element={<ChartPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
