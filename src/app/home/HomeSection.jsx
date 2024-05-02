import ArrowIcon from '@/components/icons/ArrowIcon';
import Image from 'next/image';

const HomeSection = () => {
  return (
    <section className='flex justify-center w-full'>
      <div className='flex items-center max-w-6xl w-full'>
        <article className='w-full'>
          <div className='text-4xl text-color-title font-semibold'>
            <h2>We build beautiful and</h2>
            <h2>reliable web solutions</h2>
          </div>
          <div className='mt-3 text-lg'>
            <p>
              We strongly believe that communication, trust and transparency
            </p>
            <p>
              are the essential elements of succesful business relationship.
            </p>
            <p>Ready for the journey?</p>
          </div>
          <div className='flex gap-3 mt-7'>
            <button className='py-2 px-7 border border-color-text rounded'>
              Learn more
            </button>
            <button className='flex gap-2 items-center bg-color-primary text-color-title py-2 px-7 rounded'>
              <span>Our Projects</span>
              <ArrowIcon />
            </button>
          </div>
        </article>
        <article className='w-full'>
          <Image
            className='ml-32'
            src='/assets/background-domo.jpg'
            width={644}
            height={832}
            alt='background image'
          />
        </article>
      </div>
    </section>
  );
};

export default HomeSection;
