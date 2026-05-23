import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Appbar from './component/Appbar'
import Filters from './component/Filters'
import Items from './component/Items'
import SeasonalSpecial from './component/SeasonalSpecial'
import Footer from './component/Footer'

function App() {
  return (
   <>
   <Appbar/>
   <Filters/>
   <Items/>
   <SeasonalSpecial/>
   <Footer/>
   </>
  )
}

export default App