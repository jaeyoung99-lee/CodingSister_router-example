import "./App.css";
import Homepage from "./page/Homepage";
import Aboutpage from "./page/Aboutpage";
import { Route, Routes } from "react-router-dom";
import Productpage from "./page/Productpage";
import ProductDetailPage from "./page/ProductDetailPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
