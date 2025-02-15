import React from "react";
import { Check, X } from "lucide-react";

const TicketComparisonTable = () => {
  const features = [
    {
      name: "Access to Pitch Sessions",
      standard: true,
      premium: true,
      vip: true,
    },
    {
      name: "Access to Panel Discussions",
      standard: true,
      premium: true,
      vip: true,
    },
    {
      name: "Access to Workshops",
      standard: true,
      premium: true,
      vip: true,
    },
    {
      name: "General Networking Areas",
      standard: true,
      premium: true,
      vip: true,
    },
    {
      name: "Pitching Opportunity",
      standard: "(5 Investors' Presence)",
      premium: "(8 Investors' Presence)",
      vip: "(5 Investors' Presence)",
      isSpecial: true,
    },
    {
      name: "Desert Night Experience",
      standard: false,
      premium: true,
      vip: true,
    },
    {
      name: "Lunch & Snacks Included",
      standard: false,
      premium: true,
      vip: true,
    },
    {
      name: "1:1 Investor Matchmaking",
      standard: false,
      premium: false,
      vip: "(Matched Based on Startup Niche)",
      isSpecial: true,
    },
    {
      name: "VIP Lounge Access",
      standard: false,
      premium: false,
      vip: true,
    },
    {
      name: "Podcast Feature Opportunity",
      standard: false,
      premium: false,
      vip: true,
    },
    {
      name: "Priority Pitching",
      standard: false,
      premium: false,
      vip: true,
    },
  ];

  const renderCell = (value) => {
    if (typeof value === "string") {
      return <span className="text-sm text-white/80 italic">{value}</span>;
    }
    return value ? (
      <Check className="w-5 h-5 text-emerald-400" />
    ) : (
      <X className="w-5 h-5 text-red-400" />
    );
  };

  return (
    <div className="bg-[#101118]">
      <div className="container 4xl:max-w-none mx-auto px-4 py-16 relative">
        <div
          className="bg-emerald-600 text-white absolute w-full md:!w-[700px] flex justify-center text-[16px] md:text-[22px] lg:text-[25px] 2xl:text-[30px]  font-gotham italic top-[30px]  font-bold py-3 px-6 rounded-md "
          style={{
            left: "50%",
            transform: "translate(-50%)",
          }}
        >
          Compare Passes & Find Your Perfect Fit
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-[#404146] ">
            <thead>
              <tr>
                <th className="py-4 border-r border-black pt-10 px-6 text-left text-white text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]  font-gotham italic  font-bold bg-[#404146] ">
                  Features
                </th>
                <th className="py-4 border-r border-black pt-10 px-6 text-center text-white text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]  font-gotham italic  font-bold bg-[#404146] ">
                  Standard Pass
                </th>
                <th className="py-4 border-r border-black pt-10 px-6 text-center text-white text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]  font-gotham italic  font-bold bg-[#404146] ">
                  Premium Pass
                </th>
                <th className="py-4 border-r border-black pt-10 px-6 text-center text-white text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]  font-gotham italic  font-bold bg-[#404146] ">
                  VIP Pass
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-t border-black border-1">
                  <td className="py-4 px-6 border-r border-black text-white text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]  font-gotham italic  font-bold bg-[#404146]">
                    {feature.name}
                  </td>
                  <td className="py-4 px-6 text-center-tick border-r border-black bg-[#404146]">
                    {renderCell(feature.standard)}
                  </td>
                  <td className="py-4 px-6 text-center-tick border-r border-black bg-[#404146]">
                    {renderCell(feature.premium)}
                  </td>
                  <td className="py-4 px-6 text-center-tick border-r border-black bg-[#404146]">
                    {renderCell(feature.vip)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TicketComparisonTable;
