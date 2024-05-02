import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  return (
    <section className=' w-full bg-color-title relative h-72'>
      <div className='absolute  top-0 left-0 right-0 flex justify-center gap-8 mt-24 text-[#D2DFFF]'>
        <div className='max-w-6xl flex justify-center gap-8'>
          <article className='flex bg-color-primary px-7 pt-4 w-full rounded-md'>
            <div className='w-full'>
              <h5 className='text-color-title text-2xl mb-3 mt-6'>
                Get in touch with us
              </h5>
              <p className='leading-7 text-[15px]'>
                Maecenas sed diam eget risus varius blandit sit amet non magna.
              </p>
              <button className='py-2 px-7 border border-color-[#D2DFFF] rounded mt-8'>
                Hire us
              </button>
            </div>
            <div className='w-full'></div>
          </article>
          <article className='flex bg-color-primary px-7 pt-4 w-full rounded-md'>
            <div className='w-full'>
              <h5 className='text-color-title text-2xl mb-3 mt-6'>
                Our Projects
              </h5>
              <p className='leading-7 text-[15px]'>
                Maecenas sed diam eget risus varius blandit sit amet non magna.
              </p>
              <button className='py-2 px-7 border border-color-[#D2DFFF] rounded mt-8'>
                See Projects
              </button>
            </div>
            <div className='w-full'>
              <Image
                className='h-full w-full'
                src='/assets/phone-domo.webp'
                width={100}
                height={100}
                alt='phone image'
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
