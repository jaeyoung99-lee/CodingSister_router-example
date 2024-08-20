import "./App.css";
import Homepage from "./page/Homepage";
import Aboutpage from "./page/Aboutpage";
import { Navigate, Route, Routes } from "react-router-dom";
import Productpage from "./page/Productpage";
import ProductDetailPage from "./page/ProductDetailPage";
import LoginPage from "./page/LoginPage";
import { useState } from "react";
import UserPage from "./page/UserPage";

function App() {
  const [authenticate, setAuthenticate] = useState(false); // false가 로그인 안한 상태

  // PrivateRoute는 대문자로 시작하기 때문에 함수가 아니라 컴포넌트임
  const PrivateRoute = () => {
    return authenticate == true ? <UserPage /> : <Navigate to="/login" />;
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
