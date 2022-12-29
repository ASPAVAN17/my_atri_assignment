import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/mine/portfolio" element={<Portfolio />} />
    </Routes>
  );
}
