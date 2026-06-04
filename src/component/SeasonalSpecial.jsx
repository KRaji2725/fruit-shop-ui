// import React, { useState, useEffect } from 'react'
// import seasonalfruits from '../data/SeasonalFruits.json'
// import FruitsCards from './FruitsCards'
// import Divider from './Divider'

// function SeasonalSpecial({cart = [], setCart,search=""}) {
//   const [loading, setLoading] = useState(true)

//   // fake loading
//   useEffect(() => {

//     setTimeout(() => {
//       setLoading(false)
//     }, 2000)

//   }, [])

//   // skeleton UI
//   if (loading) {
//     return (

//       <section className='w-5/6 mx-auto my-10'>

//         {/* <Divider title={"SEASON SPECIAL"} /> */}
//         <h3 className='font-playfair text-slate-500 text-3xl bg-white p-4 uppercase text-center'>SEASON SPEACIAL</h3>
//         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-10 p-10'>

//           {[1, 2, 3].map((item) => (

//             <FruitsCards
//               key={item}
//               loading={true}
//             />

//           ))}

//         </div>

//       </section>
//     )
//   }

// const filteredSeasonal= seasonalfruits.filter((items)=>(item.name?? "")
// .toLowerCase()
// .includes((search??"").toLowerCase))
//   return (
//     <div>
//       <section className='w-5/6 mx-auto my-10 '>
//         {/* <Divider title={"SEASON SPECIAL"} /> */}
//         <h3 className='font-playfair text-slate-500 text-3xl bg-white p-4 uppercase text-center'>SEASON SPEACIAL</h3>

//         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-10 p-10'>
//           {seasonalfruits.map((item) => (
//             <FruitsCards key={item.id} item={item} cart={cart} setCart={setCart} />
//           ))}
//         </div>
//       </section>
//     </div>
//   )
// }

// export default SeasonalSpecial
import React, { useState, useEffect } from 'react'
import seasonalfruits from '../data/SeasonalFruits.json'
import FruitsCards from './FruitsCards'

function SeasonalSpecial({
  cart = [],
  setCart,
  search = ""
}) {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const filteredSeasonal = seasonalfruits.filter((item) =>
    (item.name ?? "")
      .toLowerCase()
      .includes((search ?? "").toLowerCase())
  )

  if (loading) {
    return (
      <section className='w-5/6 mx-auto my-10'>
        <h3 className='font-playfair text-slate-500 text-3xl bg-white p-4 uppercase text-center'>
          SEASON SPECIAL
        </h3>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-10 p-10'>
          {[1, 2, 3].map((item) => (
            <FruitsCards
              key={item}
              loading={true}
            />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className='w-5/6 mx-auto my-10'>
      <h3 className='font-playfair text-slate-500 text-3xl bg-white p-4 uppercase text-center'>
        SEASON SPECIAL
      </h3>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-10 p-10'>

        {filteredSeasonal.map((item) => (
          <FruitsCards
            key={item.id}
            item={item}
            cart={cart}
            setCart={setCart}
          />
        ))}

      </div>

      {/* {filteredSeasonal.length === 0 && (
        <h1 className='text-center text-slate-500 text-xl'>
          No Seasonal Fruits Found 😢
        </h1>
      )} */}
    </section>
  )
}

export default SeasonalSpecial