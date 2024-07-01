import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cars from "./Cars";
import Products from "./Products";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Cars />} />
        <Route path="/products/list_products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
