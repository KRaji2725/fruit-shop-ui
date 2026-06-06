import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import fruits from "../data/fruits.json";
import Divider from "../component/Divider";
import ProductNavbar from "../component/ProductNavbar";
import CartSidebar from "../component/CartSidebar";

function ProductDetails({ item, cart, setCart, cartOpen, setCartOpen }) {
  const { id } = useParams();
  const navigate = useNavigate();
  // find product
  const product = fruits.find((item) => item.id === Number(id));

  // related products
  const relatedProducts = fruits
    .filter((item) => item.id !== product.id)
    .slice(0, 3);

  // check already in cart
  const alreadyExists = cart.some((item) => item.id === product.id);

  // toggle cart (ADD / REMOVE)
  const handleCart = () => {
    if (alreadyExists) {
      // REMOVE
      const updatedCart = cart.filter(
        (item) => item.id !== product.id
      );
      setCart(updatedCart);
    } else {
      // ADD
      setCart([...cart, product]);
    }
  };

  return (
    <div>
      <ProductNavbar cart={cart} setCartOpen={setCartOpen} />

      <CartSidebar
        cart={cart}
        setCart={setCart}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
      />

      <div className="max-w-6xl mx-auto p-10 grid md:grid-cols-2 gap-12 items-center">

        {/* Product Image */}
        <div>
          <img
            src={`/images/${product.image}`}
            alt={product.name}
            className="w-90 rounded-2xl shadow-xl hover:scale-105 duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">

          <h1 className="text-5xl font-bold text-slate-800">
            {product.name}
          </h1>

          <p className="text-3xl font-semibold text-green-600">
            ₹ {product.price}
          </p>

          <p className="text-green-600">In Stock</p>

          <div className="flex text-yellow-500 text-xl">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="text-slate-500 leading-8">
            Fresh and healthy fruit directly from farm. Rich in vitamins and minerals.
          </p>

          {/* ADD / REMOVE BUTTON */}
          <button
            onClick={handleCart}
            className={`p-3 rounded-xl text-white ${alreadyExists ? "bg-red-500 text-white hover:bg-red-600" : "bg-green-600  hover:bg-green-700"
              }`}
          >
            {alreadyExists ? "Remove" : "Add To Cart"}
          </button>
        </div>
      </div>

      {/* Related Products */}
      <Divider title={"Related Fruits"} />

      <div

        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-10 p-8">
        {relatedProducts.map((item) => (
          <div
            key={item.id}
            onClick={() => {

              navigate(`/product/${item.id}`)
            }}
            className="w-70 mx-auto rounded-lg overflow-hidden shadow-lg hover:scale-110 duration-100 relative cursor-pointer"
          >
            <img
              src={`/images/${item.image}`}
              alt={item.name}
              className="w-full h-52 object-cover"
            />

            <div className="flex flex-col items-center my-1 p-1 space-y-1">
              <span className="font-poppins text-slate-500">
                {item.name}
              </span>

              <p className="font-poppins text-slate-500">
                ₹ {item.price}
              </p>
            </div>

            <span className="absolute top-3 right-3 bg-sky-300 p-1 rounded-lg text-white text-sm">
              1% off
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetails;