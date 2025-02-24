import React, { useState, useEffect } from 'react'

const EventHighlightsSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    'images/1.png',
    'images/2.png',
    'images/3.png',
    'images/4.png',
    'images/5.png',
    'images/6.png',
    'images/7.png'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className='w-full bg-[#101118] py-16' id='event-highlight'>
      <div className='container 4xl:max-w-none mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='heading inline-flex items-center gap-3'>
            <span className='dot'>•</span>
            Event Highlights
            <span className='dot'>•</span>
          </h2>
          <p className='text-white/80 font-gothamBook leading-[30px] text-xl italic mt-8'>
            Riyadh Rising 2025 is designed to create unparalleled opportunities
            for startups, investors, and business leaders.
          </p>
        </div>

        <div className='flex justify-center gap-4 mb-12'>
          {slides.map((_, index) => (
            <div
              onClick={() => {
                setActiveSlide(index)
              }}
              key={index}
              className={`h-2 w-16 rounded-full transition-all duration-300 ${
                activeSlide === index
                  ? 'bg-blue-to-cyan-gradient'
                  : 'gradient-border'
              }`}
            />
          ))}
        </div>

        <div className='relative overflow-hidden'>
          <div
            className='flex transition-transform duration-700 ease-in-out'
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className='w-full justify-center flex flex-shrink-0'
              >
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className='w-[660px] h-[341px] object-fit rounded-lg'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventHighlightsSlider
