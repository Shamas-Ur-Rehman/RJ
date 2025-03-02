import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BuyPage = ({ enable }) => {
  const navigate = useNavigate()

  const packages = [
    {
      type: 'Standard Pass',
      price: '800',
      iconColor: 'bg-bronze-gradient'
    },
    {
      type: 'Premium Pass',
      price: '2000',
      iconColor: 'bg-silver-gradient'
    },
    {
      type: 'VIP Pass',
      price: '2500',
      iconColor: 'bg-gold-gradient'
    }
  ]
  const links = [
    {
      name: 'Buy Standard Pass',
      link: 'https://buy.stripe.com/14k5nQ0Pe7893m0dQS'
    },
    {
      name: 'Buy Premium Pass',
      link: 'https://buy.stripe.com/7sI8A22Xm789e0E7st'
    },
    {
      name: 'Buy Vip Pass',
      link: 'https://buy.stripe.com/7sIcQifK87894q4eUU'
    }
  ]

  return (
    <div className='min-h-screen bg-[#101118] text-white flex items-center justify-center '>
      <div className='w-full '>
        <section className='w-full bg-[#101118] py-16' id='ticket'>
          <div className='container 4xl:max-w-none mx-auto px-4'>
            <div className='flex flex-wrap justify-center gap-6'>
              {packages.map((pkg, index) => (
                <div className='flex flex-col justify-center items-center gap-10'>
                  <div
                    key={index}
                    className='relative bg-[#03232B]  gradient-border  rounded-tl-[25px]  rounded-br-[25px] min-w-[300px] min-h-[120px] p-4 pb-2 flex items-center justify-center shadow-md overflow-hidden'
                  >
                    <div className='absolute -top-0 right-0 pl-4  justify-between w-full text-white text-sm flex items-center gap-2'>
                      <div>
                        <span
                          className={`block !w-[15px] !h-[15px] absolute top-[10px] md:!h-[20px] md:!w-[20px] lg:!h-[25px] lg:!w-[25px] 2xl:!w-[30px] 2xl:!h-[30px] rounded-full ${pkg.iconColor}`}
                        />
                      </div>

                      <div className='!bg-[#106466] font-gotham text-[15px] md:text-[18px] lg:text-[20px] 2xl:text-[25px] px-3 py-1 !rounded-l-md'>
                        {pkg.type}
                      </div>
                    </div>
                    <div className='text-white font-gothamUltra pt-4 text-[35px] md:text-[45px] lg:text-[55px] 2xl:text-[80px] italic font-medium'>
                      <span>$</span>
                      {pkg.price}
                    </div>
                  </div>
                  <a
                    id='buy-btns'
                    onClick={() => window.open(links[index]?.link, '_blank')}
                    className='w-full relative cursor-pointer'
                  >
                    <button
                      type='button'
                      disabled={!enable}
                      className={`relative z-10 w-full text-black font-bold py-2 px-8 rounded-xl shadow-lg text-[16px] md:text-[25px] font-gothamBook italic transition-colors ${
                        enable
                          ? 'bg-yellow-400 hover:bg-yellow-300 cursor-pointer'
                          : 'bg-gray-300 cursor-not-allowed text-gray-600'
                      }`}
                    >
                      {links[index].name}
                    </button>
                    <div
                      className={`border-l z-0 ${
                        enable ? 'border-yellow-400' : 'border-gray-300'
                      } border-4 h-[10vh] absolute top-[-40px] left-[50%]`}
                    ></div>
                  </a>
                </div>
              ))}
            </div>

            <p className='text-white/80 text-center font-gotham  text-[20px] font-normal italic mt-20'>
              <p>
                When you proceed to the next page, your contact details and any
                information you provide will be stored in our registration
              </p>
              <p>
                system. If your registration is interrupted, you may receive an
                email within 24 hours with a link to continue from where you
              </p>
              <p className='mb-8'>left off.</p>
              <p>
                If you decide not to complete the registration, you will not
                receive any further communications. If your details have not
              </p>
              <p>
                been previously shared with us, they will be deleted within 30
                days after the event ends.
              </p>
            </p>
          </div>
        </section>
        <div className='text-white/80 bg-[#03232B] rounded-xl text-center text-xl py-3 flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-16'>
          <a href='#' className='hover:text-gray-300'>
            Accessibility
          </a>
          <a href='#' className='hover:text-gray-300'>
            Terms of Use
          </a>
          <a href='#' className='hover:text-gray-300'>
            Privacy Policy
          </a>
          <a href='#' className='hover:text-gray-300'>
            Cookie Policy
          </a>
          <a href='#' className='hover:text-gray-300'>
            Visitor Terms
          </a>
        </div>
      </div>
    </div>
  )
}

export default BuyPage
