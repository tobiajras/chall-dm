'use client';

import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import Image from 'next/image';

const CaseStudies = () => {
  const [emblaRef] = useEmblaCarousel({ dragFree: true, loop: true }, [
    AutoScroll({
      speed: 1.5,
      stopOnInteraction: false,
      stopOnFocusIn: false,
      startDelay: 0,
      direction: 'backward',
    }),
  ]);

  return (
    <section
      id='caseStudiesSection'
      className='flex flex-col items-center bg-white w-full pt-24 sm:pt-40 mb:pb-16 sm:pb-24'
    >
      <h4 className='mb-10 text-color-title-dark text-xs sm:text-sm font-bold'>
        CLIENTS WE WORKED WITH
      </h4>
      <div className='max-w-6xl w-full overflow-hidden' ref={emblaRef}>
        <article className='flex'>
          <div className='flex-[0_0_25%] sm:flex-[0_0_25%] ml-10'>
            <a
              href='https://thenextweb.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                className='w-40 h-20 mx-auto object-contain opacity-80 hover:opacity-100 transition-opacity'
                src='/assets/clients-logos/tnw-clients.svg'
                width={200}
                height={100}
                alt='Logo tnw'
              />
            </a>
          </div>
          <div className='flex-[0_0_25%] sm:flex-[0_0_25%] ml-10'>
            <a
              href='https://about.google/intl/es/products/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                className='w-40 h-20 mx-auto object-contain opacity-80 hover:opacity-100 transition-opacity'
                src='/assets/clients-logos/google-clients.svg'
                width={200}
                height={100}
                alt='Logo google'
              />
            </a>
          </div>
          <div className='flex-[0_0_25%] sm:flex-[0_0_25%] ml-10'>
            <a
              href='https://www.nike.com.ar/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                className='w-40 h-20 mx-auto object-contain opacity-80 hover:opacity-100 transition-opacity'
                src='/assets/clients-logos/nike-clients.svg'
                width={200}
                height={100}
                alt='Logo nike'
              />
            </a>
          </div>
          <div className='flex-[0_0_25%] sm:flex-[0_0_25%] ml-10'>
            <a
              href='https://www.airbnb.com.ar/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                className='w-40 h-20 mx-auto object-contain opacity-80 hover:opacity-100 transition-opacity'
                src='/assets/clients-logos/airbnb-clients.svg'
                width={200}
                height={100}
                alt='Logo airbnb'
              />
            </a>
          </div>
          <div className='flex-[0_0_25%] sm:flex-[0_0_25%] ml-10'>
            <a
              href='https://thenewafrica.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                className='w-40 h-20 mx-auto object-contain opacity-80 hover:opacity-100 transition-opacity'
                src='/assets/clients-logos/itsafrica-clients.png'
                width={200}
                height={100}
                alt='Logo its new africa'
              />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default CaseStudies;
