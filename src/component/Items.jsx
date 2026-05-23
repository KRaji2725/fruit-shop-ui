import React, { useState } from 'react'
import fruits from '../data/fruits.json'
import FruitsCards from './FruitsCards'
function Items() {


    return (
        <div>
            <section className='w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-10 p-10'>
                {fruits.map((item) => (
                    
                    <FruitsCards key={item.id} item={item}/>
                ))}
            </section>
        </div>
    )
}

export default Items
