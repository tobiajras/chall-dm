import technologies from '@/data/technologies';

import Image from 'next/image';

const TechnologySection = () => {
  return (
    <section className='flex justify-center bg-color-primary w-full py-32 -mt-10'>
      <div className='max-w-6xl flex w-full'>
        <article className='flex flex-col justify-center w-full'>
          <h5 className='text-color-title text-3xl mb-5'>
            We use cutting edge technology
          </h5>
          <p className='text-color-text-dark text-lg max-w-[530px]'>
            Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean
            lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae
            elit libero, a pharetra auge. Vestibulum id ligula porta felis
            euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum
            faucibus dolor auctor.
          </p>
        </article>
        <article className=' grid grid-cols-2 gap-x-24 gap-y-10 p-20'>
          {technologies.map((icon, index) => (
            <div className=' h-24' key={index}>
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
