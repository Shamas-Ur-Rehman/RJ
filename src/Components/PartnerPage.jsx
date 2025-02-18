import React from 'react'
import { Phone, Mail } from 'lucide-react'
import ContactSection from './ContactSection'
const context = [
  {
    heading: 'Visionary Partner',
    text: 'Premium branding and exposure across all event platforms.'
  },
  {
    heading: 'Innovation Partner',
    text: 'Highlighted presence in key event areas and marketing materials.'
  },
  {
    heading: 'Empowerment Partner',
    text: 'A cost-effective way to align your brand with innovation.'
  }
]
const PartnerPage = () => {
  return (
    <>
      <div className='bg-black-to-green-gradient p-8 text-white' id='partner'>
        <div className='container 4xl:max-w-none mx-auto space-y-12 relative'>
          <div
            className='absolute top-[-110px] w-full flex justify-center'
            style={{
              left: '50%',
              transform: 'translate(-50%)'
            }}
          >
            <h1 className='heading text-cyan-300'>
              <span className='dot'>•</span>
              Partner With Us
              <span className='dot'>•</span>
            </h1>
          </div>
          <div className='text-center space-y-4 '>
            <p className='text-gray-300 text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]  font-gotham italic  font-medium'>
              Be part of Riyadh Rising and showcase your brand to the world.
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-6'>
            {context.map((para, index) => (
              <div key={index} className='relative flex flex-col items-center'>
                <div className='bg-[#404146] relative rounded-xl min-h-[170px] flex justify-center items-end text-center p-6 w-full shadow-md pt-12'>
                  <div
                    className='bg-[#03232B] absolute top-0 !w-full  xl:!w-[415px] 2xl:!w-full rounded-none py-3 text-center gradient-border mb-4'
                    style={{
                      left: '50%',
                      top: '20%',
                      transform: 'translate(-50%,-20%)'
                    }}
                  >
                    <h3 className='text-white text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]  font-gotham italic  font-bold'>
                      {para.heading}
                    </h3>
                  </div>
                  <p className='text-white/80'>{para.text}</p>
                </div>
              </div>
            ))}
          </div>
          <img
            className=' absolute right-0 z-0 pointer-events-none'
            src='images/Rectangle.png'
          />

<div className='marquee'>
            <div className='images text-white'>
              {/* <img src='images/logo-01.png' alt='logo' /> */}
              <img src='images/logo-02.png' alt='logo' />
              <img src='images/logo-03.png' alt='logo' />
              <img src='images/logo-04.png' alt='logo' />
              <img src='images/logo-05.png' alt='logo' />
              <img src='images/logo-06.png' alt='logo' />
              {/* <img src='images/logo-07.png' alt='logo' /> */}
              {/* <img src='images/logo-08.png' alt='logo' /> */}
              {/* <img src='images/logo-09.png' alt='logo' /> */}
              {/* <img src='images/iwan_ventures_logo.png.png' alt='logo' /> */}
              <img src='images/logo-10.png' alt='logo' />
              <img src='images/011.png' alt='011' />
              <img src='images/logo-11.png' alt='logo' />
              <img src='images/logo-12.jpg' alt='logo' />
              <img src='images/logo-13.jpg' alt='logo' />
              <img src='images/logo-14.jpg' alt='logo' />
              <img src='images/logo-15.png' alt='logo' />
              <img src='images/logo-16.jpg' alt='logo' />
              <img src='images/logo-17.jpg' alt='logo' />
              <img src='images/logo-18.png' alt='logo' />
              <img src='images/logo-19.png' alt='logo' />

             


            </div>
          </div>
          <div
            className='bg-[#03232B] relative rounded-lg p-6 mb-8'
            style={{
              boxShadow: '7px 7px 10px 0px #FFFFFF80'
            }}
          >

            
            <div className='flex justify-between items-center  flex-wrap gap-4'>
              <p className='text-yellow-400 text-[16px] md:text-[22px] z-10  lg:text-[25px] 2xl:text-[30px]  font-gotham italic font-bold'>
                For partnership inquiries, contact us at
              </p>
              <div className='space-y-2'>
                <div className='flex items-center gap-3'>
                  <div className='rounded-full bg-cyan-300/20 gradient-border p-2'>
                    <Phone className='text-cyan-300' size={20} />
                  </div>
                  <a
                    href='tel:+971543918220'
                    className='text-white text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]  font-gotham italic  font-bold '
                  >
                    +971543918220
                  </a>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='rounded-full gradient-border bg-cyan-300/20 p-2'>
                    <Mail className='text-cyan-300' size={20} />
                  </div>
                  <a
                    href='mailto:info@riyadhrising.com'
                    className='text-white text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]  font-gotham italic  font-bold '
                  >
                    info@riyadhrising.com
                  </a>
                </div>
              </div>
            </div>
          </div>
         
          <div className='text-center relative mb-12'>
            <p className='text-white text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]  font-gotham italic  font-bold z-1 mb-4'>
              Secure your spot today and be part of Riyadh Rising 2025—
              <span className='text-yellow-400'>
                where innovation meets opportunity.
              </span>
            </p>
            <button className='bg-yellow-400 !cursor-pointer text-black font-bold py-2 px-8 rounded-full shadow-lg hover:bg-yellow-300 text-[16px] md:text-[22px] lg:text-[25px] 2xl:text-[30px]  font-gotham italic  transition-colors'>
              Book Your Ticket Now
            </button>
          </div>
        </div>
      </div>
      <div className=' bg-blue-to-cyan-gradient'>
        <ContactSection />
      </div>
    </>
  )
}

export default PartnerPage
