import servicesData from '@/data/services';

import DesignIcon from '@/components/icons/DesignIcon';
import DesktopIcon from '@/components/icons/DesktopIcon';
import NotesIcon from '@/components/icons/NotesIcon';

const ServicesSection = () => {
  return (
    <section className='flex justify-center z-10'>
      <div className='flex flex-col items-center max-w-6xl'>
        <article>
          <h3 className='text-2xl text-color-title mb-3 text-center'>
            Our Services
          </h3>
          <div className='text-lg'>
            <p>
              We feel very strong about our skills when it comes to planning,
              designing
            </p>
            <p>and coding applications. Here is what we love to do!</p>
          </div>
        </article>
        <article className='mt-10'>
          <ul className='grid grid-cols-3 gap-8'>
            {servicesData.map((service, index) => (
              <li
                key={index}
                className='flex flex-col items-center bg-white p-8 rounded-sm'
              >
                <div className='p-5 bg-color-primary w-16 h-16 rounded-full'>
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
                <h5 className='text-black font-semibold mt-4'>
                  {service.title}
                </h5>
                <p className='mt-4 text-balance text-center leading-8'>
                  {service.description}
                </p>
                <button className='mt-10 py-2 px-7 border border-color-text rounded'>
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
