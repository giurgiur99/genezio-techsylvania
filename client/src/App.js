import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactBoilerplate from "./views/ReactBoilerplate";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReactBoilerplate />} />
      </Routes>
    </Router>
  );
}
