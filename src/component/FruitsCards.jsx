import React from 'react'
function FruitsCards({ item }) {
  return (
    <div className='rounded-lg overflow-hidden shadow-lg transform  group hover:scale-110 duration-100 relative '>
      <img
        src={`/images/${item.image}`}
        alt={item.name}
        className='w-full h-52 object-cover'
      />
      <div className='flex flex-col items-center my-1 p-1 space-y-1 '>
        <span className='font-poppins text-slate-500 block' >{item.name}</span>
     <p className='font-poppins text-slate-500'>  ₹ {item.price}</p>
     <span className='font-poppins  uppercase text-lime-400 text-xs invisible group-hover:visible'>add to cart</span>
      </div>
     <span className='absolute top-3 right-3 bg-sky-300 p-1 rounded-lg text-white border-sky-300 text-sm'>1% off</span>
    </div>
  )
}
export default FruitsCards