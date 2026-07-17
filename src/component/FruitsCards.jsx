import React from 'react'
import { useNavigate } from 'react-router-dom'
function FruitsCards({ item, cart = [], setCart, loading }) {
  const navigate = useNavigate()


  // skeleton UI
  if (loading) {
    return (
      <div


        className='rounded-lg overflow-hidden shadow-lg animate-pulse relative'

      >

        {/* image */}
        <div className='w-full h-52 bg-slate-300'></div>

        {/* content */}
        <div className='flex flex-col items-center my-1 p-1 space-y-3'>

          {/* fruit name */}
          <div className='h-5 w-32 bg-slate-300 rounded'></div>

          {/* price */}
          <div className='h-5 w-16 bg-slate-300 rounded'></div>

          {/* button */}
          <div className='h-8 w-28 bg-slate-300 rounded'></div>

        </div>

        {/* offer badge */}
        <div className='absolute top-3 right-3 h-8 w-14 bg-slate-300 rounded-lg'></div>

      </div>

    )
  }
  //cart check
  const alreadyExists = Array.isArray(cart) && cart.some(
    (cartItem) => cartItem.id === item.id
  )
  // add cart
  const handleCart = () => {
    if (alreadyExists) return
    // setCart([...cart, item])
    const existingItem = cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );

      setCart(updatedCart);
    } else {
      // setCart([...cart, { ...item, quantity: 1 }]);
      const newCart = [...cart, { ...item, quantity: 1 }];
      console.log("New Cart:", newCart);
      setCart(newCart);
    }
  }
  // remove cart
  const handleRemove = () => {
    const updateCart = cart.filter(
      (cartItem) => cartItem.id !== item.id)
    setCart(updateCart)
  }
  return (
    <div
      onClick={() => {
        console.log(item.id)
        navigate(`/product/${item.id}`)
      }}
      className='rounded-lg overflow-hidden shadow-lg transform  group hover:scale-110 duration-100 relative '>
      <img
        src={`/images/${item.image}`}
        alt={item.name}
        className='w-full h-52 object-cover'
      />
      <div className='flex flex-col items-center my-1 p-1 space-y-1 '>
        <span className='font-poppins text-slate-500 block' >{item.name}</span>
        <p className='font-poppins text-slate-500'>  ₹ {item.price}</p>
        <button
          onClick={(e) => {
            e.stopPropagation(); // 👈 Card click aagama stop pannum

            if (alreadyExists) {
              handleRemove();
            } else {
              handleCart();
            }
          }}
          className={`px-3 py-1 rounded text-sm transition duration-300 ${alreadyExists
              ? "text-red-500 hover:text-red-700"
              : "text-green-500 hover:text-lime-500"
            }`}
        >
          {alreadyExists ? "Remove" : "Add To Cart"}
        </button>
      </div>
      <span className='absolute top-3 right-3 bg-sky-300 p-1 rounded-lg text-white border-sky-300 text-sm'>1% off</span>
    </div>
  )
}
export default FruitsCards