import React, { useState } from 'react'
import logo from '../assets/logo.png';



export default function Menu() {

  const [show, setShow] = useState(false);


  return (

    <header>

      <div className="lg:flex hidden items-center justify-between font-montserat h-28">
        <a href="/" className="logo lg:my-12">
          <img src={logo} alt="Logo" />
        </a>

        <nav>
          <ul className="flex justify-center gap-8 pt-4 items-center text-white-100 capitalize font-medium">
            <li><a href="/" className="">Home</a></li>
            <li><a href="#about" className="text-white-50 hover:text-white-100">About</a></li>
            <li><a href="#tokenomics" className="text-white-50 hover:text-white-100">Tokenomics</a></li>
            <li><a href="#roadmap" className="text-white-50 hover:text-white-100">roadmap</a></li>
            <li><a href="https://t.me/SOLRAGON_PORTAL" className='text-white-50 hover:text-white-100'>join us</a></li>
            <li><a href="https://www.dextools.io/app/en/solana/pair-explorer/DsgMDa6XDv57Ut1PiHep4kPfh9kfpLqZYoRCN92bMBqW?t=1711937755510" className='text-white-50 hover:text-white-100'>Chart</a></li>
          </ul>
        </nav>

        <a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=7UwysmyBx9DAg8BjLqzatSvDC8biud5pDfMvVAFFvvJw&inputAmount=1.7&outputAmount=3931400.853024&fixed=in">
          <button className="text-white-50 bg-blue-50 py-3 lg:text-lg md:px-10 px-3 text-center rounded-xl font-medium flex items-center justify-center gap-x-6 border-2 border-blue-50">
            Buy Now
          </button>
        </a>
      </div>

      <div className="lg:hidden flex items-center justify-between pt-5 font-montserat">
        <a href="/" className="logo lg:my-12">
          <img src={logo} alt="Logo" className='' />
        </a>

        <button onClick={() => setShow(!show)} className="nav cursor-pointer">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>

        </button>
      </div>

      {
        show ? <div className="sidebar fixed top-0 bottom-0 left-0 p-2 w-3/4 overflow-y-auto text-center font-inter font-semibold bg-blue-50 z-30">

          <div className="mt-3 px-3 mb-12">
            <a href="/" className="w-1/2">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md transition duration-500 cursor-pointer  text-white-100">
            <a href="/" className="text-lg ml-4 font-semibold">Home</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100">
            <a href="#about" className="text-lg ml-4 font-semibold">About</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100">
            <a href="#tokenomics" className="text-lg ml-4 font-semibold">Tokenomics</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100">
            <a href="#roadmap" className="text-lg ml-4 font-semibold">Roadmap</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100">
            <a href="https://t.me/SOLRAGON_PORTAL" className="text-lg ml-4 font-semibold">Join Us</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100">
            <a href="https://www.dextools.io/app/en/solana/pair-explorer/DsgMDa6XDv57Ut1PiHep4kPfh9kfpLqZYoRCN92bMBqW?t=1711937755510" className="text-lg ml-4 font-semibold">Chart</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100 bg-red-50">
            <a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=7UwysmyBx9DAg8BjLqzatSvDC8biud5pDfMvVAFFvvJw&inputAmount=1.7&outputAmount=3931400.853024&fixed=in" className="text-lg ml-4 font-semibold">Buy Now</a>
          </button>
        </div> : null
      }


    </header >
  )
}
