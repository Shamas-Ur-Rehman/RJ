import React from 'react'
import {
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Instagram,
  TwitterIcon
} from 'lucide-react'

const ContactSection = () => {
  return (
    <div className='relative' id='contact'>
      <div className='container 4xl:max-w-none w-full mx-auto relative py-10 p-5'>
        {/* Contact Us Section */}
        <div className='flex justify-between items-start flex-wrap gap-8'>
          <div className='space-y-2'>
            <div className='flex items-center gap-2'>
              <img src='images/riyad.png' />
              <img src='images/rising.png' />
            </div>
            <h2 className='main-subheading !font-gothamUltra !text-[#03232B] mb-2'>
              Contact Us
            </h2>
            <p className='text-white text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]  font-gotham italic  font-medium'>
              For more information, reach out to our team:
            </p>
          </div>
          <div>
            <div className='flex justify-center border-b-2 items-center flex-col pb-5 font-gothamBook font-normal text-[20px] text-white leading-[19px]  '>
              <p>Project Of</p>
              <img src='images/Morsebridgelogos-041.png' />
            </div>
            <div className='flex justify-center  mt-5 items-center flex-col pb-5 font-gothamBook font-normal text-[20px] text-white leading-[19px]  '>
              <p>Strategic Partner</p>
              <img src='images/logo-11.png' className='h-20 mt-4' />
            </div>
          </div>
          {/* <div className='space-y-4'>
            <div className='space-y-2'>
              <div className='flex items-center gap-3'>
                <img src='images/phone.png' alt='phone' className='h-16 w-16' />

                <a
                  href='tel:+971543918220'
                  className='text-white text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]  font-gothamBook italic  font-bold '
                >
                  +971543918220
                </a>
              </div>
              <div className='flex items-center gap-3'>
                <img src='images/mail.png' alt='mail' className='h-16 w-16' />
                <a
                  href='mailto:ayub@morsebridge.com'
                  className='text-white text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]  font-gothamBook italic  font-bold '
                >
                  ayub@morsebridge.com
                </a>
              </div>
            </div>
            <div className='flex gap-4 items-center bg-[#03232B] px-4 rounded-md'>
              <span className='text-[#66FCF1] text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]  font-gothamBook italic  font-bold'>
                Follow Us
              </span>
              <div className='flex gap-2'>
                <a
                  href='https://www.linkedin.com/showcase/riyadhrising/?viewAsMember=true'
                  target='_blank'
                  className='rounded-full border border-[#66FCF1] group  cursor-pointer  p-2'
                >
                  <img
                    src='images/linkdin.png'
                    className='text-[#66FCF1] h-6 w-6 group-hover:text-[#03232B] transition-all duration-200'
                    size={20}
                  />
                </a>
                <a className='rounded-full border border-[#66FCF1] group cursor-pointer  p-2'>
                  <img
                    src='images/X.png'
                    className='text-[#66FCF1] h-6 w-6 group-hover:text-[#03232B] transition-all duration-200'
                    size={20}
                  />
                </a>
                <a className='rounded-full border border-[#66FCF1] group cursor-pointer  p-2'>
                  <img
                    src='images/insta.png'
                    className='text-[#66FCF1] h-6 w-6 group-hover:text-[#03232B] transition-all duration-200'
                    size={20}
                  />
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default ContactSection
