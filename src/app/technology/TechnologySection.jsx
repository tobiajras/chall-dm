import technologies from '@/data/technologies';

import Image from 'next/image';

const TechnologySection = () => {
  return (
    <section
      id='technologySection'
      className='flex justify-center bg-color-primary w-full py-20 sm:py-16 md:py-32 -mt-10'
    >
      <div className='max-w-6xl flex items-center w-full mx-6 sm:mx-8 md:mx-10'>
        <article className='flex flex-col justify-center w-full'>
          <h5 className='sm:text-nowrap text-color-title text-lg sm:text-2xl md:text-3xl mb-2 sm:mb-3 md:mb-5'>
            We use cutting edge technology
          </h5>
          <p className='text-color-text-dark text-[10px] sm:text-sm md:text-lg max-w-[260px] sm:max-w-[320px] md:max-w-[450px] lg:max-w-[490px]'>
            Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean
            lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae
            elit libero, a pharetra auge. Vestibulum id ligula porta felis
            euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum
            faucibus dolor auctor.
          </p>
        </article>
        <article className='grid grid-cols-2 gap-x-5 gap-y-3 pl-3 sm:gap-x-10 md:gap-x-10 lg:gap-x-24 sm:gap-y-10 sm:p-10 md:p-12'>
          {technologies.map((icon, index) => (
            <div className='h-10 sm:h-16 md:h-24' key={index}>
              <Image
                className='h-full w-full object-contain'
                src={icon.src}
                alt={icon.alt}
                width={80}
                height={80}
              />
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};

export default TechnologySection;
