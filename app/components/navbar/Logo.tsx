"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'


const Logo = () => {
    const router = useRouter()

  return (
    <div className='flex justify-center lg:justify-start '>
      <Image 
    onClick={() => router.push('/')}
    alt='Logo' 
    className='block mx-auto lg:mx-0 cursor-pointer lg:w-auto sm:w-12' 
    height='80' 
    width='200' 
    src='/images/ferieBoligLogo.png' 
    
    />
</div>
    
  )
}

export default Logo