import Image from 'next/image';
import React from 'react';
import TwitterIcon from './icons/social/TwitterIcon';
import DribbleIcon from './icons/social/DribbleIcon';
import FacebookIcon from './icons/social/FacebookIcon';
import InstagramIcon from './icons/social/InstagramIcon';

const Footer = () => {
  return (
    <footer className='flex justify-center py-40'>
      <section className='flex max-w-6xl w-full'>
        <article className='w-full'>
          <h5 className='text-color-title mb-3'>compleet labs</h5>
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
        <article className='grid grid-cols-3 w-full'>
          <div>
            <h5 className='text-color-title mb-3'>SITEMAP</h5>
            <ul className='flex flex-col gap-2'>
              <li>Home</li>
              <li>Technology</li>
              <li>Services</li>
              <li>About</li>
            </ul>
          </div>
          <div>
            <h5 className='text-color-title mb-3'>CASE STUDIES</h5>
            <ul className='flex flex-col gap-2'>
              <li>Swiss Airlines</li>
              <li>Google</li>
              <li>Apple</li>
              <li>Nike</li>
            </ul>
          </div>
          <div>
            <h5 className='text-color-title mb-3'>CONTACT</h5>
            <ul className='flex flex-col gap-2'>
              <li>Jobs</li>
              <li>Hire us</li>
            </ul>
          </div>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
