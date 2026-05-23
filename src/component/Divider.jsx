 import React from 'react'
 
 function Divider({title}) {
   return (
     <div>
        <div className='relative'>
            {/* divider */}
            <div className='absolute inset-0 flex items-center'>
                <div className='border border-slate-300 w-9/12 mx-auto'>
                 
                </div>
            </div>
            {/* text */}
            <div className=' flex justify-center relative ' >
                 <div className='font-playfair text-slate-500 text-3xl bg-white p-4 uppercase'>{title}</div>   
            </div>
          </div>
     </div>
   )
 }
 
 export default Divider
 