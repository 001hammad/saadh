import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between items-center p-3'>
        <div><Image width={20} height={20} src="/q.png" alt='Search'/></div>
        <div><h2 className='h-[35px] w-[65]'>Avion</h2></div>
        <div className='flex gap-[10px]'>
            <p><Image width={20} height={20} src="/Shopping--cart - Copy.png" alt='Avatar' /></p>
            <p><Image width={20} height={20} src="/User--avatar - Copy.png" alt='Cart'/></p>
        </div>
      </div>
      <div className='flex w-[675px] h-[22px] md:ml-[400px] gap-[30px] '>
        <p>Plant pots</p>
        <p>Ceramics</p>
        <p>Tables</p>
        <p>Chairs</p>
        <p>Crockery</p>
        <p>Tableware</p>
        <p>Cutlery</p>
      </div>
    </div>
  )
}

export default Header
