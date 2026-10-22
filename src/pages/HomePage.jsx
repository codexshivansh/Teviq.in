import ExperienceHero from '../components/experience/ExperienceHero';
import AudienceSection from '../components/experience/AudienceSection';
import { ChannelSection, JourneySection, KnowledgeSection, TeamSection } from '../components/experience/ExperienceSections';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

function HomePage({ openFaq, setOpenFaq }) {
  return (
    <main className="experience-home">
      <ExperienceHero />
      <AudienceSection />
      <ChannelSection />
      <KnowledgeSection />
      <TeamSection />
      <JourneySection />
      <Pricing />
      <FAQ openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <FinalCTA />
    </main>
  );
}

export default HomePage;
