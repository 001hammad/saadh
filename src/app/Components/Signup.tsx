import React from 'react'

const Signup = () => {
  return (
    <div>
     <div className="md:ml-[40px] bg-[#F9F9F9] w-[1440px] h-[481px] flex justify-center items-center">
  <div className="bg-[#FFFFFF] flex flex-col justify-center items-center md:w-[1273px] md:h-[364px]">
    {/* Heading */}
    <p className="font-semibold text-[36px] leading-[50.4px] text-center text-[#2A254B]">
      Join the club and get the benefits
    </p>

    {/* New Text below the heading */}
    <p className="font-normal text-[16px] leading-[24px] md:w-[470px] md:h-[48px] text-center text-[#2A254B] mt-4">
      Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores and more
    </p>

    {/* Input and Button Section */}
    <div className="mt-8 flex items-center space-x-4">
      {/* Input */}
      <input 
        type="email" 
        placeholder="your@email.com" 
        className="w-[354px] h-[56px] bg-[#F9F9F9] px-4 py-2 text-[16px] leading-[24px] text-[#2A254B] border-none "
      />

      {/* Sign Up Button */}
      <button className="w-[158px] h-[56px] bg-[#2A254B] text-white text-[16px] leading-[24px] font-normal  px-8 py-2">
        Sign up
      </button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Signup
