import React, { useState } from 'react'
import seasonalfruits from '../data/SeasonalFruits.json'
import FruitsCards from './FruitsCards'
import Divider from './Divider'

function SeasonalSpecial() {
    
  return (
    <div>
      <section className='w-5/6 mx-auto my-10 '>
         <Divider title={"SEASON SPECIAL"}/>
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-10 p-10'>
                {seasonalfruits.map((item) => (
                    <FruitsCards key={item.id} item={item}/>
                ))}
            </div>
      </section>
    </div>
  )
}

export default SeasonalSpecial
