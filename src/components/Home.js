import React, { useEffect } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import bg_top from '../assets/bg_top.png';
import top from '../assets/top.png';
import token from '../assets/token.png';
import p_1 from '../assets/p_1.png';
import p_2 from '../assets/p_2.png';
import p_3 from '../assets/p_3.png';
import p_4 from '../assets/p_4.png';
import team_1 from '../assets/team_1.png';
import team_2 from '../assets/team_2.png';
import telegram from '../assets/telegram.png';

import Aos from 'aos';
import 'aos/dist/aos.css';
import Particle from './Particle';

export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 800,
        });
        Aos.refresh();
    }, [])

    return (
        <div className="bg-black-50 font-clash overflow-hidden text-white-100 bg-full">

            <div className="lg:px-20 px-5 relative z-20">
                <div className='container mx-auto'>

                    <Particle />


                    <Menu />

                    <img data-aos='fade-up' data-aos-delay='300' src={bg_top} alt='' className='absolute right-0 left-0 mt-6 flex mx-auto px-5'></img>

                    <div className="lg:flex justify-between gap-x-12 py-12 lg:mt-32 mt-20 lg:space-y-0 space-y-8 relative z-20">
                        <div data-aos='slide-right' className='lg:w-4/12'>
                            <p className='text-lg text-white-50 font-thin'>
                                Solragon is a groundbreaking project poised to revolutionize the Solana ecosystem. Solragon introduces a novel concept of free Liquidity pool locker for Solana-based tokens.
                                Our platform aims to provide a secure and efficient solution for liquidity providers (LPs) within the Solana DeFi space free of cost. With Solragon, LPs can safeguard their Solana tokens while providing peace of mind for investors.
                            </p>

                            <a href="https://docs.solragon.io/">
                                <button data-aos='slide-right' className="text-white-50 bg-blue-50 py-3 lg:text-lg lg:px-10 px-5 text-center rounded-xl font-medium flex items-center justify-center gap-x-6 border-2 border-blue-50 hover:text-white-50 mt-6">
                                    Whitepaper

                                    <svg className='' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.84753 3.55811L16.6672 6.33399L14.1614 16.226" stroke="#FEF5E7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3.55807 13.6743L16.5684 6.16281" stroke="#FEF5E7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </a>
                        </div>

                        <div data-aos='zoom-in' data-aos-delay='200' className='lg:w-4/12'>
                            <img src={top} alt='' className='animate-float lg:-mt-8'></img>
                        </div>

                        <div className='lg:w-4/12 flex flex-col'>
                            <p data-aos='slide-left' className='md:text-3xl text-lg font-bold text-white-50'>
                                Empowering Solana, Protecting Your Investments for free
                            </p>


                            <a href="/">
                                <button data-aos='slide-left' className="text-blue-50 font-medium lg:text-lg py-3 px-8 border-2 border-blue-50 rounded-xl flex items-center justify-center gap-x-6 hover:bg-blue-50 hover:text-white-50 mt-8">
                                    Buy Solragon

                                    <svg className='' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.84753 3.55811L16.6672 6.33399L14.1614 16.226" stroke="#FEF5E7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3.55807 13.6743L16.5684 6.16281" stroke="#FEF5E7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </button>
                            </a>
                        </div>
                    </div>

                    <div id='about' className='lg:w-8/12 flex flex-col mx-auto text-center space-y-8'>
                        <h1 className='md:text-5xl text-3xl font-semibold font-dragon tracking-widest'>
                            About Us
                        </h1>

                        <p className='md:text-lg'>
                            Our team is dedicated to fostering a thriving DeFi environment on Solana by offering innovative tools and services that empower users and promote financial inclusivity. Join us on this journey as we redefine the possibilities of decentralized finance on the Solana blockchain.
                        </p>
                    </div>

                </div>
            </div>

            {/* tokenomics */}

            <div
                id="tokenomics"
                className="lg:py-20 py-6 lg:px-20 px-5 container mx-auto"
            >
                <h3 className="md:text-5xl text-3xl font-dragon tracking-widest font-semibold text-center uppercase">
                    tokenomics
                </h3>

                <div>
                    <div className='grid lg:grid-cols-3 grid-cols-1 items-center justify-between gap-10 mt-8'>

                        <div data-aos="zoom-in" data-aos-delay="350" className='bg-red-50 rounded-2xl lg:h-48'>
                            <h2 className='text-7xl font-bold text-red-100 font-vinque uppercase text-center'>
                                Name
                            </h2>
                            <p className='md:text-6xl text-3xl font-semibold text-center font-montserat pb-6 px-3'>
                                SOLRAGON
                            </p>
                        </div>

                        <div data-aos="zoom-in" data-aos-delay="350" className='bg-red-50 rounded-2xl lg:h-48'>
                            <h2 className='text-7xl font-bold text-red-100 font-vinque uppercase text-center'>
                                SYMBOL
                            </h2>
                            <p className='md:text-6xl text-3xl font-semibold text-center font-montserat pb-6 px-3'>
                                $SOLRAGON
                            </p>
                        </div>

                        <div data-aos="zoom-in" data-aos-delay="350" className='bg-red-50 rounded-2xl lg:h-48'>
                            <h2 className='text-7xl font-bold text-red-100 font-vinque uppercase text-center'>
                                SUPPLY
                            </h2>
                            <p className='md:text-5xl text-3xl font-semibold text-center font-montserat pb-6 px-3'>
                                Total Supply<br></br>
                                1 Billion
                            </p>
                        </div>

                    </div>
                </div>

                <div className='lg:w-9/12 flex flex-col mx-auto text-center space-y-8 lg:py-20 py-8'>
                    <h1 className='md:text-5xl text-3xl font-semibold font-dragon tracking-widest'>
                        Liquidity Token
                    </h1>

                    <p className='md:text-lg'>
                        Let's talk Solragon, the game-changer on Solana. Picture this: a free LP pool locker, designed just for Solana tokens. With Solragon, locking your assets is a breeze - and guess what? It's totally free! No fees, no hassle. We're talking about keeping your investments safe from rug pulls and dodgy schemes. Plus, with our platform, you're not just locking liquidity; you're locking in trust, transparency, and stability in the Solana DeFi world. So, why wait? Join us and let's ride the wave of a safer, more inclusive financial future together!"
                    </p>
                </div>

                <img src={token} alt='toeknomics' className='flex mx-auto'></img>

            </div>

            {/* roadmap */}

            <div id="roadmap" className="lg:py-12 py-6 lg:px-20 px-5 container mx-auto"
            >
                <h3 className="md:text-5xl text-2xl font-dragon tracking-widest font-semibold text-center uppercase text-gradient">
                    Roadmap
                </h3>

                <div className="lg:mt-16 mt-6">

                    <div className="h-1 w-full bg-white-50">
                    </div>

                    <div className='h-1 w-full line -translate-y-1'>
                    </div>

                    <div className="lg:flex items-baseline justify-center gap-12 lg:px-20 lg:space-y-0 space-y-6 -mt-2.5">

                        <div className="flex flex-col items-center">
                            <div
                                data-aos="zoom-in"
                                className="absolute -mt-3.5 lg:block hidden"
                            >
                                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#6284DB" />
                                    <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#6284DB" />
                                </svg>

                            </div>

                            <div className="border-l border-blue-50 lg:mt-5 mt-0 mb-3 h-14"></div>

                            <div
                                data-aos="flip-right"
                                className="border border-blue-50 rounded-2xl p-6 lg:w-72 w-full"
                            >
                                <p>MARCH 15, 2024</p>

                                <h5 className="text-2xl font-semibold pt-2">Concept</h5>

                                <ul className="space-y-2 mt-4 list-disc ml-4">
                                    <li>Concept Generation</li>
                                    <li>Team Assemble</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div
                                data-aos="zoom-in"
                                className="absolute -mt-3.5 lg:block hidden"
                            >
                                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#6284DB" />
                                    <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#6284DB" />
                                </svg>
                            </div>

                            <div className="border-l border-blue-50 lg:mt-5 mt-0 mb-3 h-14"></div>

                            <div
                                data-aos="flip-right"
                                className="border border-blue-50 rounded-2xl p-4 lg:w-72 w-full"
                            >
                                <p>March 31, 2024</p>

                                <h5 className="text-2xl font-semibold pt-2">Research</h5>

                                <ul className="space-y-2 mt-4 list-disc ml-4">
                                    <li>Proving the concept can work</li>
                                    <li>Whitepaper completion</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div
                                data-aos="zoom-in"
                                className="absolute -mt-3.5 lg:block hidden"
                            >
                                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#6284DB" />
                                    <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#6284DB" />
                                </svg>
                            </div>

                            <div className="border-l border-blue-50 lg:mt-5 mt-0 mb-3 h-14"></div>

                            <div
                                data-aos="flip-right"
                                className="border border-blue-50 rounded-2xl p-4 lg:w-72 w-full"
                            >
                                <p>TBA</p>

                                <h5 className="text-2xl font-semibold pt-2">Design</h5>

                                <ul className="space-y-2 mt-4 list-disc ml-4">
                                    <li>Platform design</li>
                                    <li>Building the MVP</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div
                                data-aos="zoom-in"
                                className="absolute -mt-3.5 lg:block hidden"
                            >
                                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#6284DB" />
                                    <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#6284DB" />
                                </svg>
                            </div>

                            <div className="border-l border-blue-50 lg:mt-5 mt-0 mb-3 h-14"></div>

                            <div
                                data-aos="flip-right"
                                className="border border-blue-50 rounded-2xl p-4 lg:w-72 w-full"
                            >
                                <p>TBA</p>

                                <h5 className="text-2xl font-semibold pt-2">Pre-sale</h5>

                                <ul className="space-y-2 mt-4 list-disc ml-4">
                                    <li>Public financing & Seed funding raised</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* partners */}

            <div className="lg:py-16 py-6 lg:px-20 px-5 container mx-auto">

                <h3 className='md:text-6xl text-4xl font-semibold font-dragon tracking-widest text-center lg:mb-20 mb-8 uppercase'>
                    partners
                </h3>

                <div className='flex flex-wrap items-center justify-center gap-10'>
                    <img src={p_1} alt=''></img>
                    <img src={p_2} alt=''></img>
                    <img src={p_3} alt=''></img>
                    <img src={p_4} alt=''></img>
                </div>
            </div>

            {/* team */}

            <div className="lg:py-16 py-5 lg:px-20 px-5 container mx-auto">

                <h3 className='md:text-6xl text-5xl font-semibold font-dragon tracking-widest text-center lg:mb-20 mb-12 uppercase'>
                    Team
                </h3>

                <div className='lg:flex items-center justify-center gap-28 lg:space-y-0 space-y-8'>
                    <div className='lg:flex items-center gap-8'>
                        <img src={team_1} alt='' className='mb-5 lg:block flex mx-auto'></img>

                        <div className='space-y-4 lg:text-left text-center'>
                            <h3 className='md:text-3xl text-xl font-semibold font-dragon tracking-widest uppercase'>
                                Owner
                            </h3>
                            <p className='lg:text-lg pb-6'>@Apeking1337</p>
                            <a href='https://t.me/Apeking1337' className=''><img src={telegram} alt='' className='lg:block flex mx-auto'></img></a>
                        </div>
                    </div>

                    <div className='lg:flex items-center gap-8'>
                        <img src={team_2} alt='' className='mb-5 lg:block flex mx-auto'></img>

                        <div className='space-y-4 lg:text-left text-center'>
                            <h3 className='md:text-3xl text-xl font-semibold font-dragon tracking-widest uppercase'>
                                Core
                            </h3>
                            <p className='lg:text-lg pb-6'>@gogeta_Sol</p>
                            <a href='https://t.me/Gogeta_Sol' className=''><img src={telegram} alt='' className='lg:block flex mx-auto'></img></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:py-16 py-5 lg:px-20 px-5 mb-12 container mx-auto">

                <div className='lg:w-9/12 bg-gradient flex flex-col justify-center items-center mx-auto md:py-16 py-8 md:px-12 px-5 gap-y-12 shadow-xl'>
                    <h3 className='md:text-6xl text-4xl font-semibold font-dragon tracking-widest'>
                        Join Us
                    </h3>

                    <p className="md:text-lg text-base font-semibold text-center mx-auto">
                        Thank you for exploring Solragon, the ultimate destination for secure and accessible liquidity provision on the Solana blockchain. Join our community today to unlock the full potential of decentralized finance while protecting your investments. Together, let's shape the future of DeFi on Solana.
                    </p>

                    <a href="/">
                        <button className="text-white-50 bg-blue-50 py-2 md:px-10 px-6 text-medium text-center rounded-xl font-medium flex items-center justify-center gap-x-6 border-2 border-blue-50">
                        Connect with us
                        </button>
                    </a>
                </div>

            </div>

            <Footer />

        </div >
    )
}
