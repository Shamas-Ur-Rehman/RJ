import React from 'react'

const TicketPackages = () => {
  const packages = [
    // {
    //   type: 'Student Pass',
    //   price: '120'
    //   // iconColor: 'bg-bronze-gradient'
    // },
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

  return (
    <section className='w-full bg-[#101118] py-16' id='ticket'>
      <div className='container 4xl:max-w-none mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-5xl md:text-6xl font-bold text-teal-300 inline-flex justify-center items-center gap-3'>
            <span className='dot'>•</span>
            <span className='heading'>Ticket Packages</span>
            <span className=' dot'>•</span>
          </h2>
          <p className='text-white/80 text-xl italic mt-4'>
            Choose the package that fits your needs
          </p>
        </div>
        <div className='flex flex-wrap justify-center gap-6'>
          {packages.map((pkg, index) => (
            <div
              key={index}
              className='relative bg-[#03232B]  gradient-border  rounded-tl-[25px]  rounded-br-[25px] min-w-[300px] min-h-[120px] p-4 pb-2 flex items-center justify-center shadow-md overflow-hidden'
            >
              {console.log(pkg?.iconColor)}
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
          ))}
        </div>
        <p className='text-white/80 text-center text-xl italic mt-7'>
          Students can get an 80% discount on a Standard Pass by submitting
          their student ID to{' '}
          <a className='text-yellow-400' href='mailto:info@riyadhrising.net'>
            info@riyadhrising.net!
          </a>
        </p>
      </div>
    </section>
  )
}

export default TicketPackages
