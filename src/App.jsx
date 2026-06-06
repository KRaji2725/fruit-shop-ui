
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Login from "./pages/LogIn";
import Items from "./pages/Items";
import CartSidebar from "./component/CartSidebar";
import Appbar from "./component/Appbar";
import SignUp from "./pages/SignUp";
import { useEffect } from "react";
import ProtectedRoute from "./component/ProtectedRoute";
import ProductDetails from "./pages/ProductDetails";
function App() {
  const [search, setSearch] = useState("");
  // const [cart, setCart] = useState([]);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <>

      {/* ROUTES ONLY */}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/items"
          element={
            <ProtectedRoute>
              <Items
                search={search}
                setSearch={setSearch}
                cart={cart}
                setCart={setCart}
                cartOpen={cartOpen}
                setCartOpen={setCartOpen}
              />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<SignUp />} />
       <Route
  path="/product/:id"
  element={
    <ProductDetails
      cart={cart}
      setCart={setCart}
      cartOpen={cartOpen}
      setCartOpen={setCartOpen}
    />
  }
/>
         
      </Routes>
    </>
  );
}

export default App;