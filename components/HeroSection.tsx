'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll/modules';
import { HiArrowDown } from 'react-icons/hi';

const HeroSection = () => {
  return (
    <section id='home' className='relative h-screen w-full'>
      <div
        className='flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left'
        style={{ marginTop: '10rem' }}
      >
        <div className='md:mt-2 md:w-1/2'>
          <Image
            src='/coding.jpg'
            alt=''
            width={325}
            height={325}
            className='rounded-full shadow-2xl'
          />
        </div>
        <div className='fmd:mt-2 md:w-3/5'>
          <h1 className='text-2xl font-semibold md:text-5xl whitespace-nowrap'>
            Hello, I'm{' '}
            <span className='font-semibold text-teal-600'>
              Amiel Brencis Salipande
            </span>
          </h1>
          <p className='text-lg font-semibold mt-4 mb-6 md:text-3xl text-center'>
            An aspiring{' '}
            <span className='font-semibold text-teal-600'>
              Software Developer{' '}
            </span>
          </p>
          <div className='flex justify-center'>
            <a
              href='/Salipande_Amiel Brencis_resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer'
            >
              Connect with me
            </a>
          </div>
        </div>
      </div>
      <div className='flex flex-row items-center text-center justify-center '>
        <Link
          to='about'
          className='cursor-pointer'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className='animate-bounce' />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
