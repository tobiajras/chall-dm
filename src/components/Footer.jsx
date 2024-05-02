'use client';

import { Link } from 'react-scroll';

import React from 'react';
import TwitterIcon from './icons/social/TwitterIcon';
import DribbleIcon from './icons/social/DribbleIcon';
import FacebookIcon from './icons/social/FacebookIcon';
import InstagramIcon from './icons/social/InstagramIcon';

const Footer = () => {
  return (
    <footer className='flex flex-col items-center'>
      <section className='flex justify-center w-full pt-28 md:pt-40 pb-10 md:pb-20'>
        <div className='flex flex-col md:flex-row max-w-6xl w-full mx-6 sm:mx-8 md:mx-10 items-center gap-8 md:gap-0'>
          <article className='w-full'>
            <h5 className='text-color-title mb-3 font-medium text-lg'>
              compleet labs
            </h5>
            <p className='max-w-[400px]'>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
              nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper
              nulla.
            </p>
            <ul className='flex gap-3 mt-5'>
              <li>
                <a
                  href='https://twitter.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <TwitterIcon className='w-6 h-6 hover:fill-color-title' />
                </a>
              </li>
              <li>
                <a
                  href='https://dribbble.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <DribbleIcon className='w-6 h-6 hover:fill-color-title' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.facebook.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FacebookIcon className='w-6 h-6 hover:fill-color-title' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <InstagramIcon className='w-6 h-6 hover:fill-color-title' />
                </a>
              </li>
            </ul>
          </article>
          <article className='grid md:grid-cols-3 gap-y-5 md:gap-y-0 w-full'>
            <div>
              <h5 className='text-color-title mb-3 text-sm'>SITEMAP</h5>
              <ul className='flex flex-col gap-2'>
                <li>
                  <Link
                    className='hover:text-color-title transition-colors cursor-pointer'
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
                    className='hover:text-color-title transition-colors cursor-pointer'
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
                    className='hover:text-color-title transition-colors cursor-pointer'
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
                    className='hover:text-color-title transition-colors cursor-pointer'
                    to='aboutSection'
                    spy={true}
                    smooth={true}
                    offset={-300}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className='text-color-title mb-3 text-sm'>CASE STUDIES</h5>
              <ul className='flex flex-col gap-2'>
                <li>
                  <a
                    className='hover:text-color-title transition-colors'
                    href='https://www.swiss.com/ar/es/homepage'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Swiss Airlines
                  </a>
                </li>
                <li>
                  <a
                    className='hover:text-color-title transition-colors'
                    href='https://about.google/intl/es/products/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Google
                  </a>
                </li>
                <li>
                  <a
                    className='hover:text-color-title transition-colors'
                    href='https://www.apple.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Apple
                  </a>
                </li>
                <li>
                  <a
                    className='hover:text-color-title transition-colors'
                    href='https://www.nike.com.ar/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Nike
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className='text-color-title mb-3 text-sm'>CONTACT</h5>
              <ul className='flex flex-col gap-2'>
                <li>
                  <Link
                    className='hover:text-color-title transition-colors cursor-pointer'
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
                    className='group hover:text-color-title transition-colors cursor-pointer'
                    to='aboutSection'
                    spy={true}
                    smooth={true}
                    offset={-300}
                    duration={500}
                  >
                    <span className=''>Hire us</span>
                  </Link>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
      <section className='flex justify-center gap-2 bg-black w-full p-8 text-lg font-medium'>
        <span>Desarrollado por:</span>
        <a
          className='hover:text-color-title transition-colors'
          href='https://www.linkedin.com/in/tobiasajras/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Tobias Ajras
        </a>
      </section>
    </footer>
  );
};

export default Footer;
