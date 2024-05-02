import React from 'react';
import HireUsIcon from './icons/HireUsIcon';

const Navbar = () => {
  return (
    <header className='flex justify-center'>
      <section className='flex justify-between max-w-6xl w-full'>
        <article>
          <h2>compleet labs</h2>
        </article>
        <nav>
          <ul className='flex gap-5'>
            <li>Home</li>
            <li>Services</li>
            <li>Technology</li>
            <li>Case studies</li>
            <li>About</li>
            <li className='flex gap-2'>
              <HireUsIcon className='fill-white' />
              <span>Hire us</span>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Navbar;
