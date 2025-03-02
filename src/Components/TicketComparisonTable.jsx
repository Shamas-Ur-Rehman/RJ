import React from 'react'
import { Check, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const TicketComparisonTable = () => {
  const navigate = useNavigate()
  const links = [
    {
      name: 'Buy Standard Pass',
      url: 'https://buy.stripe.com/14k5nQ0Pe7893m0dQS'
    },
    {
      name: 'Buy Premium Pass',
      url: 'https://buy.stripe.com/7sI8A22Xm789e0E7st'
    },
    {
      name: 'Buy Vip Pass',
      url: 'https://buy.stripe.com/7sIcQifK87894q4eUU'
    }
  ]
  const features = [
    {
      name: 'Access to Pitch Sessions',
      standard: true,
      premium: true,
      vip: true
    },
    {
      name: 'Access to Panel Discussions',
      standard: true,
      premium: true,
      vip: true
    },
    {
      name: 'Access to Workshops',
      standard: true,
      premium: true,
      vip: true
    },
    {
      name: 'General Networking Areas',
      standard: true,
      premium: true,
      vip: true
    },
    {
      name: 'Pitching Opportunity',
      standard: "(5 Investors' Presence)",
      premium: "(8 Investors' Presence)",
      vip: "(10 Investors' Presence)",
      isSpecial: true
    },
    {
      name: 'Desert Night Experience',
      standard: false,
      premium: true,
      vip: true
    },
    {
      name: 'Lunch & Snacks Included',
      standard: false,
      premium: true,
      vip: true
    },
    {
      name: '1:1 Investor Niche Matchmaking',
      standard: false,
      premium: false,
      vip: true,
      isSpecial: true
    },
    {
      name: 'VIP Lounge Access',
      standard: false,
      premium: false,
      vip: true
    },
    {
      name: 'Podcast Feature Opportunity',
      standard: false,
      premium: false,
      vip: true
    },
    {
      name: 'Priority Pitching',
      standard: false,
      premium: false,
      vip: true
    },
    {
      standard: (
        <a onClick={() => navigate('/registration-now')} rel='noreferrer'>
          <button className='bg-yellow-400 hover:bg-yellow-300 transition-all duration-100 text-black font-bold py-2 px-4 rounded-lg '>
            {links[0].name}
          </button>
        </a>
      ),
      premium: (
        <a onClick={() => navigate('/registration-now')} rel='noreferrer'>
          <button className='bg-yellow-400 hover:bg-yellow-300 transition-all duration-100 text-black font-bold py-2 px-4 rounded-lg '>
            {links[1].name}
          </button>
        </a>
      ),
      vip: (
        <a onClick={() => navigate('/registration-now')} rel='noreferrer'>
          <button className='bg-yellow-400 hover:bg-yellow-300 transition-all duration-100  text-black font-bold py-2 px-4 rounded-lg '>
            {links[2].name}
          </button>
        </a>
      )
    }
  ]

  const renderCell = value => {
    if (React.isValidElement(value)) {
      return value
    }
    if (typeof value === 'string') {
      return <span className='text-lg text-white/80 italic'>{value}</span>
    }
    return value ? (
      <Check className='w-7 h-7 text-emerald-400' />
    ) : (
      <X className='w-7 h-7 text-red-400' />
    )
  }

  return (
    <div className='bg-[#101118]'>
      <div className='container 4xl:max-w-none mx-auto px-4 pt-16 pb-8 relative'>
        <div
          className='bg-emerald-600 text-white absolute w-full md:!w-[700px] flex justify-center text-[16px] md:text-[22px] lg:text-[25px] 2xl:text-[30px]  gothamBook italic top-[30px]  font-bold py-3 px-6 rounded-md '
          style={{
            left: '50%',
            transform: 'translate(-50%)'
          }}
        >
          Compare Passes & Find Your Perfect Fit
        </div>

        <div className='overflow-x-auto'>
          <table className='w-full border-collapse bg-[#404146] '>
            <thead>
              <tr>
                <th className='py-4 border-r border-black pt-10 px-6 text-left text-white text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]  font-gothamBook italic  font-bold bg-[#404146] '>
                  Features
                </th>
                <th
                  onClick={() => navigate('/registration-now')}
                  className='py-4 border-r !text-center border-black pt-10 px-6 hover:text-yellow-400 cursor-pointer transition-all duration-150 text-white text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]  font-gothamBook italic  font-bold bg-[#404146] '
                >
                  Standard Pass
                </th>
                <th
                  onClick={() => navigate('/registration-now')}
                  className='py-4 border-r hover:text-yellow-400 cursor-pointer transition-all duration-150 border-black pt-10 px-6 !text - center text-white text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]  font-gothamBook italic  font-bold bg-[#404146] '
                >
                  Premium Pass
                </th>
                <th
                  onClick={() => navigate('/registration-now')}
                  className='py-4 border-r border-black pt-10 px-6 !text - center text-white text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]  font-gothamBook italic hover:text-yellow-400 cursor-pointer transition-all duration-150 font-bold bg-[#404146] '
                >
                  VIP Pass
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className='border-t w-full border-black border-1'
                >
                  <td className='py-4 w-[40%] px-6 border-r border-black text-white text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]  font-gothamBook italic  font-bold bg-[#404146]'>
                    {feature.name}
                  </td>
                  <td className='py-4 w-[20%] px-6 text-center-tick border-r border-black bg-[#404146]'>
                    {renderCell(feature.standard)}
                  </td>
                  <td className='py-4 px-6 w-[20%] text-center-tick border-r border-black bg-[#404146]'>
                    {renderCell(feature.premium)}
                  </td>
                  <td className='py-4 px-6 w-[20%] text-center-tick border-r border-black bg-[#404146]'>
                    {renderCell(feature.vip)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* <div
        id='pricing'
        className='flex items-center justify-evenly container mx-auto pb-5'
      >
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target='_blank'
            rel='noreferrer'
            className='bg-yellow-400 !cursor-pointer text-black font-bold py-2 px-8 rounded-full shadow-lg  text-[16px] md:text-[22px] lg:text-[25px] 2xl:text-[30px]  font-gotham italic  transition-colors mx-2'
          >
            {link.name}
          </a>
        ))}
      </div> */}
    </div>
  )
}

export default TicketComparisonTable
