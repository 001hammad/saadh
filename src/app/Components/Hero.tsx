import React from 'react';
import Image from 'next/image';


const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row md:ml-[160px] md:mt-[60px]">
      {/* Left Section */}
      <div className="bg-[#2A254B] p-10 text-white">
        {/* Paragraph */}
        <p className="md:w-[513px] md:h-[90px] md:text-[32px] font-[Satoshi] font-normal leading-[35px]">
          The furniture brand for the future, with timeless designs
        </p>

        {/* Button Wrapper */}
        <div className="mt-8 flex items-center">
          <button
            className="bg-[#F9F9F926]  md:h-[56px] px-8 py-4 text-white   hover:opacity-80"
          >
            View Collection
          </button>
        </div>

        {/* Second Paragraph */}
        <p className="md:w-[602px] md:mt-[230px] h-[81px] text-[18px] font-[Satoshi] font-normal leading-[27px] mt-8">
          A new era in eco-friendly furniture with Avelon, the French luxury retail brand
          with nice fonts, tasteful colors, and a beautiful way to display things digitally
          using modern web technologies.
        </p>
      </div>

      {/* Right Section */}
      <div className=" flex items-center">
        <Image
          src="/c1.png"
          alt="Furniture"
          width={520}
          height={584}
          className="gap-0"
        />
      </div>
    </div>
  );
};

export default Hero;
