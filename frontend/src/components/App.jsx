import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cars from "../components/Cars";
import Products from "../components/Products";
import AppNavbar from "../components/Navbar";
import Home from "../components/Home";
import CDTForm from "../components/CDTForm";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cars/list_cars" element={<Cars />} />
        <Route path="/products/list_products" element={<Products />} />
        <Route path="/cdt/form" element={<CDTForm />} />
      </Routes>
    </Router>
  );
}

export default App;
