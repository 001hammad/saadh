import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#2A254B] w-full h-[380px] text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6 flex justify-between">

        {/* Left Column - Menu */}
        <div className="w-[25%]">
          <h3 className="font-semibold text-[18px] mb-4">Menu</h3>
          <ul className="space-y-2">
            <li>New arrivals</li>
            <li>Best sellers</li>
            <li>Recently viewed</li>
            <li>Popular this week</li>
            <li>All products</li>
          </ul>
        </div>

        {/* Center Left Column - Categories */}
        <div className="w-[25%]">
          <h3 className="font-semibold text-[18px] mb-4">Categories</h3>
          <ul className="space-y-2">
            <li>Crockery</li>
            <li>Furniture</li>
            <li>Homeware</li>
            <li>Plant pots</li>
            <li>Chairs</li>
          </ul>
        </div>

        {/* Center Right Column - Our Company */}
        <div className="w-[25%]">
          <h3 className="font-semibold text-[18px] mb-4">Our company</h3>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Vacancies</li>
            <li>Contact us</li>
            <li>Privacy</li>
            <li>Returns policy</li>
          </ul>
        </div>

        {/* Right Column - Mailing List Input */}
        <div className="w-[25%] flex flex-col items-center">
          <h3 className="font-semibold text-[18px] mb-4">Join our mailing list</h3>
          <div className="flex items-center space-x-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-[250px] h-[40px] bg-[#F9F9F9] opacity-55 px-4 text-[16px] leading-[24px] text-[#2A254B] border-none rounded-md"
            />
            <button className="bg-[#FFFFFF] text-black text-[16px] leading-[24px] md:w-[170px] rounded-md px-8 py-2">
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Row - Copyright and Social Media Icons */}
      <div className="mt-8 flex justify-between items-center max-w-screen-xl mx-auto px-6">
        {/* Copyright */}
        <p className="text-[14px] text-[#F9F9F9]">Copyright 2022 Avion LTD</p>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
          <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
          <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
          <Image src="/picsart.svg" alt="PicsArt" width={24} height={24} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
