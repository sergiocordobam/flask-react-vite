import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cars from "./Cars";
import Products from "./Products";
import AppNavbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={"This is the Home Page"} />
        <Route path="/cars/list_cars" element={<Cars />} />
        <Route path="/products/list_products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
