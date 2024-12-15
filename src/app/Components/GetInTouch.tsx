import Image from 'next/image';

const GetTouch = () => {
  return (
    <section className="w-full py-12 flex items-center justify-between">
      {/* Left Text Section */}
      <div className="w-[720px]  h-[603px]">
        <h2 className="font-semibold text-[24px] md:m-[50px] leading-[33.6px] text-[#2A254B]">
          From a studio in London to a global brand with over 400 outlets
        </h2>
        <p className="font-normal text-[16px] md:m-[50px] leading-[21.6px] text-[#2A254B] mt-4">
          When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
          Handmade, and lovingly crafted furniture and 
        </p>
        <p className='font-normal text-[16px] md:m-[50px] leading-[21.6px] text-[#2A254B] mt-4'>
        homeware is what we live, breathe and design so our Chelsea boutique
        became the hotbed for the London interior design community.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="w-[720px] h-[603px]">
        <Image src="/c7.png" alt="Image" width={720} height={603} />
      </div>
    </section>
  );
};

export default GetTouch;
