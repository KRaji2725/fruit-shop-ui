// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
// import Appbar from './component/Appbar'
// import Filters from './component/Filters'
// import Items from './component/Items'
// import SeasonalSpecial from './component/SeasonalSpecial'
// import Footer from './component/Footer'
// import CartSidebar from './component/CartSidebar'
// import WelcomePage from './component/WelcomePage'

// function App() {
//   const [search, setSearch] = useState("")
//   const [cart, setCart] = useState([])
//   const [cartOpen, setCartOpen] = useState(false)
//   return (
//     <>
//       {/* <Appbar search={search} setSearch={setSearch} cart={cart} cartOpen={cartOpen} setCartOpen={setCartOpen} />
//       <Filters />
//       <Items search={search} cart={cart} setCart={setCart} />
//       <SeasonalSpecial cart={cart} setCart={setCart} />
//       <Footer />
//       <CartSidebar cart={cart} setCart={setCart} cartOpen={cartOpen} setCartOpen={setCartOpen}/> */}
//       <WelcomePage/>
//     </>
//   )
// }

// export default App

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Login from "./pages/LogIn";
import Items from "./pages/Items";
import CartSidebar from "./component/CartSidebar";
import Appbar from "./component/Appbar";
import SignUp from "./pages/SignUp";
function App() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
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
            <Items
              search={search}
              setSearch={setSearch}
              cart={cart}
              setCart={setCart}
              cartOpen={cartOpen}
              setCartOpen={setCartOpen}
            />
          }
        />
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </>
  );
}

export default App;