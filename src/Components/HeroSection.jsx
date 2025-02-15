import React, { useState } from "react";
import { Twitter, Linkedin, Instagram, Menu, X } from "lucide-react";

const HeroSection = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen bg-teal-950 relative font-sans">
      <div className="absolute inset-0 z-0">
        <img
          src="images/Hero.png"
          alt="Riyadh cityscape"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="relative z-10">
        <nav className="container 4xl:max-w-none  mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <img
              src="images/logo.png"
              alt="RJ Logo"
              className=" h-auto w-auto"
            />
          </div>

          <div className="hidden md:flex items-center gap-6 md:!text-[16px] 2xl:!text-[20px] pl-2 rounded-lg border border-yellow-400">
            <a
              onClick={() => {
                scrollToSection("event-highlight");
              }}
              className="text-white hover:text-[#66FCF1] font-gotham font-normal cursor-pointer transition"
            >
              Discover Event Highlights
            </a>
            <a
              onClick={() => {
                scrollToSection("ticket");
              }}
              className="text-white hover:text-[#66FCF1] font-gotham font-normal cursor-pointer transition"
            >
              Explore Ticket Options
            </a>
            <a
              onClick={() => {
                scrollToSection("partner");
              }}
              className="text-white hover:text-[#66FCF1] font-gotham font-normal cursor-pointer transition"
            >
              Join as a Partner
            </a>
            <a
              onClick={() => {
                scrollToSection("contact");
              }}
              className="text-white hover:text-[#66FCF1] font-gotham font-normal cursor-pointer transition"
            >
              Get in Touch
            </a>
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-bold transition hover:bg-yellow-500">
              Register Now
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-teal-950 border-t border-yellow-400 py-4 md:hidden">
            <div className="flex flex-col items-center space-y-4">
              <a
                onClick={() => {
                  scrollToSection("event-highlight");
                }}
                className="text-white hover:text-[#66FCF1] transition"
              >
                Discover Event Highlights
              </a>
              <a
                onClick={() => {
                  scrollToSection("ticket");
                }}
                className="text-white hover:text-[#66FCF1] transition"
              >
                Explore Ticket Options
              </a>
              <a
                onClick={() => {
                  scrollToSection("partner");
                }}
                className="text-white hover:text-[#66FCF1] transition"
              >
                Join as a Partner
              </a>
              <a
                onClick={() => {
                  scrollToSection("contact");
                }}
                className="text-white hover:text-[#66FCF1] transition"
              >
                Get in Touch
              </a>
              <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-bold transition hover:bg-yellow-500">
                Register Now
              </button>
            </div>
          </div>
        )}

        <main className="container 4xl:max-w-none mx-auto px-6 2xl:pt-20  pb-20 2xl:pb-24 text-center md:text-left">
          <div className="">
            <div>
              <h1 className="main-heading text-white">
                <span className="italic">Riyadh Rising</span>{" "}
                <span className="text-[#66FCF1]">2025</span>
              </h1>
              <p className="main-subheading mb-4">
                Unleashing Global Innovation in the Heart of Riyadh
              </p>
            </div>
            <p className=" text-white/80 mb-4 max-w-2xl">
              Riyadh Rising 2025 is where the world's brightest startups,
              visionary investors, and industry leaders converge to drive
              innovation and unlock boundless opportunities. Join us for this
              transformative event and be part of a global movement reshaping
              the future of technology, business, and investment.
            </p>
            <p className="font-gothamBook italic text-white font-medium !text-[25px] md:!text-[30px] xl:!text-[35px] 2xl:!text-[40px] mb-4">
              April 21-22, 2025.
            </p>
            <a
              href="#highlights"
              className="inline-block border-2 font-gotham border-[#35A070] text-[#66FCF1] px-8 py-3 rounded-lg hover:bg-[#66FCF1] hover:text-teal-950 transition duration-300 italic font-bold text-lg"
            >
              Discover Event Highlights
            </a>
          </div>
        </main>

        <div className="fixed md:flex hidden right-6 top-1/2 transform -translate-y-1/2  flex-col space-y-6">
          <a
            href="#linkedin"
            className="text-[#66FCF1] border border-[#66FCF1] p-2 rounded-full hover:text-white transition"
          >
            <img src="images/linkdin.png" className="h-5 w-5" />
          </a>
          <a
            href="#twitter"
            className="text-[#66FCF1]  border border-[#66FCF1] p-2 rounded-full hover:text-white transition"
          >
            <img src="images/X.png" className="h-5 w-5" />
          </a>
          <a
            href="#instagram"
            className="text-[#66FCF1]  border border-[#66FCF1] p-2 rounded-full hover:text-white transition"
          >
            <img src="images/insta.png" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
