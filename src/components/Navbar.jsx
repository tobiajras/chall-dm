'use client';

import { Link } from 'react-scroll';

import { useEffect, useRef, useState } from 'react';

import HamburguerIcon from '@/components/icons/HamburguerIcon';
import CloseIcon from '@/components/icons/CloseIcon';
import HireUsIcon from './icons/HireUsIcon';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBackground, setIsBackground] = useState(false);
  const scrollHandlerRef = useRef(() => {});

  scrollHandlerRef.current = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop >= 20) {
      setIsBackground(true);
    } else {
      setIsBackground(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => scrollHandlerRef.current();
    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isBackground
          ? 'md:bg-color-background flex md:justify-center w-full fixed top-0 left-0 right-0 z-30 transition-colors bg-color-background'
          : 'flex md:justify-center w-full fixed top-0 left-0 right-0 z-30 transition-colors bg-color-background md:bg-transparent'
      }`}
    >
      <div className='flex justify-between items-center max-w-6xl w-full h-20 md:h-24 py-3 mx-6 sm:mx-8 md:mx-10'>
        <div className='h-full w-full flex justify-start items-center md:w-auto'>
          <Link
            className='w-full hover:text-color-title transition-colors cursor-pointer'
            to='homeSection'
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            <h2 className='sm:text-lg text-color-title font-medium'>
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
          } absolute md:relative top-20 transition-all duration-[400ms] bg-color-background md:bg-transparent p-6 md:p-0 md:top-auto md:right-auto h-screen w-1/2 md:w-auto md:h-auto md:flex md:justify-center`}
        >
          <ul className='flex flex-col gap-3 md:flex-row md:gap-4 lg:gap-6'>
            <li className=''>
              <Link
                onClick={() => setIsOpen(false)}
                className='hover:text-color-title transition-colors cursor-pointer flex items-center gap-3'
                to='homeSection'
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                className='hover:text-color-title transition-colors cursor-pointer flex items-center gap-3'
                to='servicesSection'
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                className='hover:text-color-title transition-colors cursor-pointer flex items-center gap-3'
                to='technologySection'
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Technology
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                className='hover:text-color-title transition-colors cursor-pointer flex items-center gap-3'
                to='caseStudiesSection'
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
                to='aboutSection'
                spy={true}
                smooth={true}
                offset={-300}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                className='group hover:text-color-title transition-colors cursor-pointer flex items-center gap-2'
                to='aboutSection'
                spy={true}
                smooth={true}
                offset={-300}
                duration={500}
              >
                <HireUsIcon className='hidden md:block fill-color-text group-hover:fill-color-title w-6 h-6' />
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
