import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Platform from '../components/Platform';
import Pain from '../components/Pain';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import ROISection from '../components/ROISection';
import DashboardPreview from '../components/DashboardPreview';
import LiveDemo from '../components/LiveDemo';
import Pricing from '../components/Pricing';
import TrustSafety from '../components/TrustSafety';
import FounderPresence from '../components/FounderPresence';
import Comparison from '../components/Comparison';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

function HomePage({ openFaq, setOpenFaq }) {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <Platform />
      <Pain />
      <Features />
      <HowItWorks />
      <ROISection />
      <DashboardPreview />
      <LiveDemo />
      <Pricing />
      <TrustSafety />
      <FounderPresence />
      <Comparison />
      <FAQ openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <FinalCTA />
    </main>
  );
}

export default HomePage;
