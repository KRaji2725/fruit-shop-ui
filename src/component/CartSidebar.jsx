import React, { useState } from 'react'

function CartSidebar({ cart, cartOpen, setCartOpen, setCart }) {

  // total price

  // const total = cart.reduce(
  //   (sum, item) => sum + item.price,
  //   0
  // )
 const total = cart.reduce(
  (sum, item) =>
    sum + item.price * (item.quantity || 1),
  0
);

  // remove item
  const removeItem = (id) => {

    const updatedCart = cart.filter(
      (item) => item.id !== id
    )

    setCart(updatedCart)
  }
  // increase quantity 
  const increaseQuantity = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id
      ? {
          ...item,
          quantity: (item.quantity || 1) + 1
        }
      : item
    );

    setCart(updatedCart);
  };
  // decrease quantity
  const decreaseQuantity = (id) => {
  const updatedCart = cart
    .map(item =>
      item.id === id
        ? {
            ...item,
            quantity: (item.quantity || 1) - 1
          }
        : item
    )
    .filter(item => item.quantity > 0);

  setCart(updatedCart);
};

  return (

    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${cartOpen
          ? "translate-x-0"
          : "translate-x-full"
        }`}
    >

      {/* top */}
      <div className='flex justify-between items-center p-5 border-b'>

        <h1 className='text-2xl font-bold'>
          Cart
        </h1>

        <button
          onClick={() => setCartOpen(false)}
          className='text-red-500 text-xl'
        >
          ✕
        </button>

      </div>

      {/* cart items */}
      <div className='p-5 space-y-5 overflow-y-auto h-[70%]'>

        {
          cart.length === 0 ? (

            <h1 className='text-slate-500'>
              Cart is Empty 😢
            </h1>

          ) : (

            cart.map((item) => (

              <div
                key={item.id}
                className='flex items-center justify-between border-b pb-3'
              >
                <img src={`/images/${item.image}`} alt={item.name} className='w-12 h-12 rounded-lg object-cover' />
                <div>

                  <h1 className='font-semibold'>
                    {item.name}
                  </h1>

                  {/* <p className='text-slate-500'>
                    ₹ {item.price}
                  </p> */}
                  <p className="text-slate-500">
                    ₹ {item.price}
                  </p>

                  <div className="flex items-center gap-2 mt-2">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-gray-200 px-2 rounded"
                    >
                      -
                    </button>

                    <span>{item.quantity??1}</span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-green-500 text-white px-2 rounded"
                    >
                      +
                    </button>

                  </div>

                  <p className="font-semibold">
  ₹ {item.price * (item.quantity || 1)}
</p>

                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className='text-red-500'
                >
                  Remove
                </button>

              </div>

            ))
          )
        }

      </div>

      {/* total */}
      <div className='absolute bottom-0 left-0 w-full p-5 mb-5 border-t bg-white'>

        <div className='flex justify-between text-xl font-bold'>

          <span>Total:</span>

          <span>₹ {total}</span>

        </div>

      </div>

    </div>
  )
}

export default CartSidebar