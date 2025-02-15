import React from "react";

const WhyRiyadhSection = () => {
  const features = [
    {
      title:
        "Access to the world's largest investment funds and capital networks.",
    },
    {
      title: "A thriving ecosystem for startups and entrepreneurs.",
    },
    {
      title:
        "AI, Metaverse,Quantum Computing,DeepTech, FinTech, and Robotics and many more.",
    },
    {
      title: "Business-friendly policies and tax incentives driving growth.",
    },
  ];

  return (
    <section className="w-full bg-[#101118] relative bg-gradient-custom">
      <div className="container 4xl:max-w-none mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className=" absolute !top-[-20px] md:!top-[-30px] w-full justify-center flex 2xl:!top-[-35px] "
          style={{
            left: "50%",
            transform: "translate(-50%)",
          }}
        >
          <h2 className="w-full justify-center heading inline-flex items-center gap-3">
            <span className="bg-dot-gradient text-transparent bg-clip-text opacity-75">
              •
            </span>
            Why Riyadh?
            <span className="bg-dot-gradient text-transparent bg-clip-text opacity-75">
              •
            </span>
          </h2>
        </div>

        <p className="text-white/90 text-xl italic text-center mb-16 max-w-4xl mx-auto">
          In Riyadh, innovation meets opportunity—position yourself at the heart
          of a city reshaping the future
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/90 py-10 px-3 rounded-sm relative min-h-[200px] flex flex-col justify-start"
            >
              <div className="absolute -top-[-10px] -left-[-10px]">
                <div
                  className="w-8 h-8 bg-[#35A070] rounded-full"
                  style={{
                    boxShadow: "7px 7px 10px 0px rgba(0, 0, 0, 0.5)",
                  }}
                ></div>
              </div>

              <p className="text-white  text-start text-lg mt-5">
                {feature.title}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center max-w-4xl mx-auto space-y-2">
          <p className="text-white/80 text-base">
            Riyadh, the capital of Saudi Arabia, is the epicenter of innovation
            and investment in the Middle East. Strategically located at the
            crossroads of Europe, Asia, and Africa, it provides access to global
            markets and unmatched opportunities.
          </p>
          <p className="text-white">
            As the driving force behind{" "}
            <a
              href="#"
              className="text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              Saudi Arabia's Vision 2030
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyRiyadhSection;
