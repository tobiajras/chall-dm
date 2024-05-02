import servicesData from '@/data/services';

import DesignIcon from '@/components/icons/DesignIcon';
import DesktopIcon from '@/components/icons/DesktopIcon';
import NotesIcon from '@/components/icons/NotesIcon';

const ServicesSection = () => {
  return (
    <section id='servicesSection' className='flex justify-center z-10'>
      <div className='flex flex-col items-center max-w-6xl mx-6 sm:mx-8 md:mx-10'>
        <article>
          <h3 className='sm:text-2xl text-color-title mb-3 text-center'>
            Our Services
          </h3>
          <div className='text-xs sm:text-lg'>
            <p className='text-center max-w-xl'>
              We feel very strong about our skills when it comes to planning,
              designing and coding applications. Here is what we love to do!
            </p>
          </div>
        </article>
        <article className='mt-5 sm:mt-8 md:mt-10'>
          <ul className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {servicesData.map((service, index) => (
              <li
                key={index}
                className='flex flex-col items-center bg-white p-8 rounded-sm w-60 sm:w-64 md:w-72 lg:w-auto'
              >
                <div className='bg-color-primary w-10 h-10 sm:w-16 sm:h-16 p-3 sm:p-5 rounded-full'>
                  {service.icon === 'NotesIcon' && (
                    <NotesIcon className='w-full h-full fill-color-title' />
                  )}
                  {service.icon === 'DesktopIcon' && (
                    <DesktopIcon className='w-full h-full fill-color-title' />
                  )}
                  {service.icon === 'DesignIcon' && (
                    <DesignIcon className='w-full h-full fill-color-title' />
                  )}
                </div>
                <h5 className='text-xs sm:text-sm md:text-base text-black font-semibold mt-2 sm:mt-4'>
                  {service.title}
                </h5>
                <p className='mt-2 sm:mt-4 text-[10px] sm:text-xs md:text-base text-balance text-center leading-5 sm:leading-6 md:leading-8'>
                  {service.description}
                </p>
                <button className='text-[10px] sm:text-xs md:text-base mt-6 sm:mt-10 py-1.5 sm:py-2 px-3 sm:px-5 md:px-7 border border-color-text rounded-sm sm:rounded hover:bg-color-text hover:text-color-title transition-colors'>
                  {service.buttonText}
                </button>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default ServicesSection;
