import Image from 'next/image';

const AboutSection = () => {
  return (
    <section
      id='aboutSection'
      className=' w-full bg-color-title relative h-48 sm:h-72'
    >
      <div className='absolute mx-4 sm:mx-8 md:mx-10 top-0 left-0 right-0 flex justify-center gap-8 mt-20 sm:mt-24 text-[#D2DFFF]'>
        <div className='max-w-6xl flex justify-center gap-3 sm:gap-8'>
          <article className='flex bg-color-primary px-3 sm:px-7 pt-4 pb-4 sm:pb-6 md:pb-8 lg:pb-10 w-full rounded sm:rounded-md'>
            <div className='w-full'>
              <h5 className='text-color-title text-xs sm:text-base md:text-xl lg:text-2xl mb-3 mt-2 sm:mt-4 md:mt-6'>
                Get in touch with us
              </h5>
              <p className='text-[10px] max-w-[160px] lg:max-w-full sm:text-xs md:text-[15px] leading-4 sm:leading-6 md:leading-7 text-[15px]'>
                Maecenas sed diam eget risus varius blandit sit amet non magna.
              </p>
              <button className='text-nowrap text-[10px] sm:text-xs md:text-sm lg:text-base py-2 px-3 sm:px-7 border border-color-[#D2DFFF] rounded mt-3 sm:mt-4 md:mt-5 lg:mt-8 hover:bg-color-primary-dark transition-colors'>
                Hire us
              </button>
            </div>
            <div className='hidden sm:block sm:w-16 md:w-24 lg:w-full'></div>
          </article>
          <article className='flex bg-color-primary px-3 sm:px-7 pt-4 w-full rounded sm:rounded-md'>
            <div className='w-full'>
              <h5 className='text-color-title text-xs sm:text-base md:text-xl lg:text-2xl mb-3 mt-2 sm:mt-4 md:mt-6'>
                Our Projects
              </h5>
              <p className='text-[10px] max-w-[160px] lg:max-w-full sm:text-xs md:text-[15px] leading-4 sm:leading-6 md:leading-7'>
                Maecenas sed diam eget risus varius blandit sit amet non magna.
              </p>
              <button className='text-nowrap text-[10px] sm:text-xs md:text-sm lg:text-base py-2 px-3 sm:px-7 border border-color-[#D2DFFF] rounded mt-3 sm:mt-4 md:mt-5 lg:mt-8 hover:bg-color-primary-dark transition-colors'>
                See Projects
              </button>
            </div>
            <div className='hidden sm:block sm:w-16 md:w-24 lg:w-full'>
              <Image
                className='hidden lg:block h-full w-full object-contain object-bottom'
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
