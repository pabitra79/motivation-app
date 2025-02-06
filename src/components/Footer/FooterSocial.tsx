import Link from 'next/link'
import React from 'react'

const FooterSocial = () => {
return (
    <footer className='bg-black text-white p-4'>
    <div className='flex space-x-1'>
       
       <div> 
        <Link href="https://www.instagram.com/_._pabitra/?hl=en" className='hover:underline '>
        <img 
        src='/insta.jfif'
        alt="Instagram"
        className='h-5 w-5 ml-24 rounded-full' 
        />
        </Link>
        </div>
        <div>
        <Link href="https://www.linkedin.com/in/pabitra-barik-79-pb79/" className='hover:underline '>
        <img 
        src='/linked.jfif'
        alt="Linked in"
        className='h-5 w-5 ml-4 rounded-full' 
        />
        </Link>
    </div>
    </div>
    </footer>
)
}

export default FooterSocial
