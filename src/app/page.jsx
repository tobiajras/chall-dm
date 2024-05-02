import HomeSection from './home/HomeSection';
import ServicesSection from './services/ServicesSection';
import TechnologySection from './technology/TechnologySection';
import CaseStudies from './case-studies/CaseStudies';
import AboutSection from './about/AboutSection';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <HomeSection />
      <ServicesSection />
      <TechnologySection />
      <CaseStudies />
      <AboutSection />
    </main>
  );
}
