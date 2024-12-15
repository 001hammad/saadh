import Image from 'next/image';
import React from 'react';

const Sec = () => {
  return (
    <div className="flex flex-col md:flex-row md:ml-[160px] md:mt-[60px]">
      {/* Left Section (Image) */}
      <div>
        <Image src="/p3.png" alt="Furniture" width={630} height={478} />
      </div>

      {/* Right Section (Text) */}
      <div
        className="w-[634px] h-[478px] px-[64px] pt-[75px] pb-[54px] bg-[#2A254B] text-white"
      >
        {/* Paragraph */}
        <p className="text-[32px] font-[Satoshi] font-normal leading-[35px]">
          The furniture brand for the future, with timeless designs
        </p>

        {/* Button Wrapper */}
        <div className="mt-8 flex items-center">
          <button className="bg-[#F9F9F926] h-[56px] px-8 py-4 text-white">
            View Collection
          </button>
        </div>

        {/* Second Paragraph */}
        <p className=" md:mt-5 text-[18px] font-[Satoshi] font-normal">
          A new era in eco-friendly furniture with Avelon, the French luxury retail brand
          with nice fonts, tasteful colors, and a beautiful way to display things digitally
          using modern web technologies.
        </p>
      </div>
    </div>
  );
};

export default Sec;
