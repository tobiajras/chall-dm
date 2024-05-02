import ArrowIcon from '@/components/icons/ArrowIcon';
import Image from 'next/image';

const HomeSection = () => {
  return (
    <section
      id='homeSection'
      className='flex justify-center w-full overflow-hidden'
    >
      <div className='flex items-center max-w-6xl w-full'>
        <article className='mt-24 mb-12 sm:mb-20 md:mt-32 lg:mt-24 w-full ml-6 sm:ml-8 md:ml-10'>
          <div className='sm:text-[28px] md:text-4xl text-color-title font-semibold'>
            <h2 className='text-nowrap'>We build beautiful and</h2>
            <h2>reliable web solutions</h2>
          </div>
          <div className='mt-3 text-[10px] sm:text-base md:text-lg'>
            <p className=''>
              We strongly believe that communication, trust and transparency are
              the essential elements of succesful business relationship.
            </p>
            <p>Ready for the journey?</p>
          </div>
          <div className='flex gap-3 mt-7 text-[10px] sm:text-sm md:text-base'>
            <button className='text-nowrap py-2 px-3 sm:px-7 border border-color-text rounded hover:bg-color-text hover:text-color-title transition-colors'>
              Learn more
            </button>
            <button className='text-nowrap py-2 px-3 sm:px-7 flex gap-1 sm:gap-2 items-center bg-color-primary hover:bg-color-primary-dark transition-colors text-color-title rounded'>
              <span>Our Projects</span>
              <ArrowIcon />
            </button>
          </div>
        </article>
        <article className='w-full relative'>
          <Image
            priority
            className='md:ml-24'
            src='/assets/background-domo.jpg'
            width={644}
            height={832}
            alt='background image'
          />
          <div className='absolute top-0 -right-28 bg-gradient-to-l from-color-background to-color-background/50 w-10 h-full'></div>
        </article>
      </div>
    </section>
  );
};

export default HomeSection;
