import React, { useState } from 'react'

function Filters() {
const [selectedItem,setSelectedItem]=useState(1)
    return (
        <div>
            <section className='my-10 py-3  w:3/5 md:w-4/6 mx-auto flex flex-col justify-around md:flex-row' >
                <button onClick={()=>setSelectedItem(1)} className={` filterbtn ${selectedItem ===1?"bg-green-500 text-white" : "text-slate-500"}`}>Latest</button>
                <button onClick={()=>setSelectedItem(2)} className={`filterbtn ${selectedItem===2?"bg-green-500 text-white":"text-slate-500"}`}>Best Seller</button>
                <button onClick={()=>setSelectedItem(3)} className={`filterbtn ${selectedItem===3?"bg-green-500 text-white":"text-slate-500"}`}>Special</button>
                
            </section>

        </div>
    )
}

export default Filters
