import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import ProblemSolution from '../components/ProblemSolution';
import Channels from '../components/Channels';
import Capabilities from '../components/Capabilities';
import HowItWorks from '../components/HowItWorks';
import SeeItWorking from '../components/SeeItWorking';
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
      <ProblemSolution />
      <Channels />
      <Capabilities />
      <HowItWorks />
      <SeeItWorking />
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
