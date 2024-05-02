import Image from 'next/image';

const BackgroundImage = () => {
  return (
    <section className='absolute right-40 -z-10'>
      <article className=''>
        <Image
          src='/assets/background-domo.jpg'
          width={644}
          height={832}
          alt='background image'
        />
        <div className='absolute top-0 right-0 w-10 h-full bg-gradient-to-r from-color-background/50 to-color-background'></div>
      </article>
    </section>
  );
};

export default BackgroundImage;
