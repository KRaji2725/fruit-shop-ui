
import React from 'react'
import {useNavigate} from 'react-router-dom'

function WelcomePage() {
  const navigate = useNavigate()

  return (
    <div
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-start
        md:items-center
        justify-center
        md:justify-end
        px-4
        md:px-10
        pt-12
        md:pt-0
      "
    >
      <img
        src="/images/bg-welcome.png"
        alt="desktop-banner"
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
      />

      <img
        src="/images/mobile-bg.png"
        alt="mobile-banner"
        className="block md:hidden absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 max-w-xl w-full text-center">
        {/* Welcome */}
        <h3 className="font-greatvibe text-4xl md:text-6xl text-white">
          Welcome to
        </h3>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase drop-shadow-lg">
          Fresh Mart
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-green-900 mt-3 md:mt-6">
          Fresh Choices, Healthy Life
        </h2>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 my-4 md:my-6">
          <div className="w-16 md:w-40 h-[2px] bg-green-700"></div>

          <img
            src="/images/leaf.png"
            alt="leaf"
            className="w-6 h-6 md:w-8 md:h-8"
          />

          <div className="w-16 md:w-40 h-[2px] bg-green-700"></div>
        </div>

        {/* Description */}
        <p className="text-base md:text-lg text-white md:text-green-900 leading-relaxed px-2">
          Farm fresh fruits and vegetables delivered straight to your home
          with care, quality and freshness every day.
        </p>

        {/* Features - Desktop only */}
        <div className="hidden md:flex justify-center gap-4 mt-6">
          <div className="border-r border-green-700 px-3">
            <img src="/images/fresh.png" alt="Fresh" className="w-20" />
          </div>

          <div className="border-r border-green-700 px-3">
            <img src="/images/premium.png" alt="Premium" className="w-20" />
          </div>

          <div className="px-3">
            <img src="/images/tractor.png" alt="Delivery" className="w-20" />
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-6">
          <button className="
            bg-green-800
            text-white
            px-6
            py-3
            rounded-full
            flex
            items-center
            gap-2
            hover:bg-green-900
            transition
          " onClick={()=>navigate('/login')}>
            Shop Now
            <img src="/images/arrow.png" alt="arrow" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage