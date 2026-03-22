import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { Pricing } from './components/Pricing';
import { Demo } from './components/Demo';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <div id="services">
        <Services />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <Benefits />
      <div id="pricing">
        <Pricing />
      </div>
      <div id="demo">
        <Demo />
      </div>
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}