import React from "react";
import { Globe, Brain, Network, Lock } from "lucide-react";

const WhyAttendSection = () => {
  const reasons = [
    {
      icon: <img src="images/inv.png" className="w-10 h-10" />,
      title: "Build Global Connections",
      description:
        "Build meaningful connections with investors, startups, and global leaders.",
    },
    {
      icon: <img src="images/min.png" className="w-10 h-10" />,
      title: "Learn from Industry Pioneers",
      description:
        "Gain insights from industry pioneers through keynotes, panels, and workshops.",
    },
    {
      icon: <img src="images/ball.png" className="w-10 h-10" />,
      title: "Discover Cutting-Edge Innovations",
      description:
        "Discover cutting-edge innovations that are shaping the future.",
    },
    {
      icon: <img src="images/lock.png" className="w-8 h-8" />,
      title: "Unlock Funding Opportunities",
      description:
        "Expand your business network and unlock funding opportunities.",
    },
  ];

  return (
    <section className="bg-[#101118] pb-[100px]">
      <div className="container 4xl:max-w-none mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading text-teal-300 flex items-center justify-center gap-3">
            <span className="dot">•</span>
            Why Attend?
            <span className="dot">•</span>
          </h2>
          <div className="flex items-center justify-center mt-5 gap-2">
            <img src="images/riyad.png" />
            <img src="images/rising.png" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <div
                className="w-16 h-16 bg-teal-300 rounded-full flex items-center justify-center shadow-lg mb-[-32px] z-10"
                style={{
                  boxShadow: "7px 7px 10px 0px #00000080",
                }}
              >
                <div className="text-teal-950">{reason.icon}</div>
              </div>
              <div className="bg-[#404146] relative rounded-xl min-h-[210px] flex justify-center items-end text-center p-6 w-full shadow-md pt-12">
                <div
                  className="bg-[#03232B] absolute top-0 !w-full lg:!w-[505px] xl:!w-[605px] 2xl:!w-[605px] rounded-none py-3 text-center gradient-border mb-4"
                  style={{
                    left: "50%",
                    top: "40%",
                    transform: "translate(-50%,-40%)",
                  }}
                >
                  <h3 className="text-white text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]  font-gotham italic  font-bold">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-white/80">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttendSection;
