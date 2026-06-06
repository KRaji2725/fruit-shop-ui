import { useNavigate } from "react-router-dom";

function ProductNavbar({ cart = [], setCartOpen }) {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center p-5 shadow-md">
      <div>
        <span className="text-green-500 font-bold text-3xl">
          Fresh
        </span>
        <span className="text-slate-500 text-3xl">
          Mart
        </span>
      </div>

      <div className="flex gap-6 items-center cursor-pointer">
        <button
          onClick={() => navigate("/items")}
          className="text-slate-600 hover:text-green-500"
        >
          🏠 Home
        </button>

        <button
          className="relative cursor-pointer"
          onClick={() => setCartOpen(true)}
        >
          🛒
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
            {cart.length}
          </span>
        </button>
      </div>
    </nav>
  );
}

export default ProductNavbar;