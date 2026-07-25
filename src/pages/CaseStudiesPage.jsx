import { Link } from '../lib/router';
import { FiArrowRight } from 'react-icons/fi';
import CaseStudies from '../components/CaseStudies';
import FinalCTA from '../components/FinalCTA';

function CaseStudiesPage() {
  return (
    <main>
      <CaseStudies />
      <section className="bg-white pb-24 md:pb-[150px]">
        <div className="container-shell flex justify-center">
          <Link to="/book-demo" className="primary-button">
            Book a Demo <FiArrowRight />
          </Link>
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}

export default CaseStudiesPage;
