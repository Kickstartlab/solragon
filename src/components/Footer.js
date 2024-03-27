import React from 'react'
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';



export default function Footer() {
  return (
    <div className="font-inter bg-img">

      <footer className='relative text-white-100 mx-auto lg:px-20 font-inter px-5'>

        <div className='flex flex-col justify-between items-center text-center gap-y-6'>
          <p className='md:text-3xl text-xl font-semibold font-dragon tracking-widest'>
          Don't miss out, Stay updated
          </p>

          <div className='flex items-center gap-x-6'>
            <a href='/'>
              <img src={twitter} alt=''></img>
            </a>
            <a href='/'>
              <img src={telegram} alt=''></img>
            </a>
          </div>

          <p className='pb-6 text-white-50'> © {new Date().getFullYear()}. All rights reserved by Solragon</p>
        </div>
      </footer>
    </div>

  )
}
