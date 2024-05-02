'use client';

import { Link } from 'react-scroll';

import { useState } from 'react';

import HamburguerIcon from '@/components/Icons/HamburguerIcon';
import CloseIcon from '@/components/Icons/CloseIcon';
import HireUsIcon from './icons/HireUsIcon';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='flex md:justify-center w-full absolute top-0 left-0 right-0 z-30'>
      <div className='flex justify-between items-center max-w-6xl w-full h-20 md:h-24 py-3 mx-6 sm:mx-8 md:mx-10'>
        <div className='h-full w-full flex justify-start items-center md:w-auto'>
          <Link
            className='w-full hover:text-color-title transition-colors cursor-pointer'
            to='homeSection'
            spy={true}
            smooth={true}
            offset={-262}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            <h2 className='text-lg text-color-title font-semibold'>
              compleet labs
            </h2>
          </Link>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='flex justify-end md:hidden relative'
        >
          {!isOpen ? (
            <HamburguerIcon className='w-9 h-9' />
          ) : (
            <CloseIcon className='w-9 h-9' />
          )}
        </div>
        <nav
          className={`${
            !isOpen
              ? '-right-full opacity-0 md:opacity-100'
              : 'right-0 opacity-100'
          } absolute md:relative top-20 transition-all duration-[400ms] bg-color-background-dark p-4 md:p-auto md:top-auto md:right-auto h-screen w-1/2 md:w-auto md:h-auto md:flex md:justify-center`}
        >
          <ul className='flex flex-col gap-3 md:flex-row md:gap-8 font-medium'>
            <li className=''>
              <Link
                onClick={() => setIsOpen(false)}
                className='hover:text-color-title transition-colors cursor-pointer flex items-center gap-3'
                to='homeSection'
                spy={true}
                smooth={true}
                offset={-262}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                className='hover:text-color-title transition-colors cursor-pointer flex items-center gap-3'
                to='experienceSection'
                spy={true}
                smooth={true}
                offset={-152}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                className='hover:text-color-title transition-colors cursor-pointer flex items-center gap-3'
                to='skillsSection'
                spy={true}
                smooth={true}
                offset={-152}
                duration={500}
              >
                Technology
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                className='hover:text-color-title transition-colors cursor-pointer flex items-center gap-3'
                to='aboutMeSection'
                spy={true}
                smooth={true}
                offset={-152}
                duration={500}
              >
                Case studies
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                className='hover:text-color-title transition-colors cursor-pointer flex items-center gap-3'
                to='contactSection'
                spy={true}
                smooth={true}
                offset={-152}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                className='group hover:text-color-title transition-colors cursor-pointer flex items-center gap-2'
                to='contactSection'
                spy={true}
                smooth={true}
                offset={-152}
                duration={500}
              >
                <HireUsIcon className='fill-color-text group-hover:fill-color-title w-6 h-6' />
                <span className=''>Hire us</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
