import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import TheIdea from './components/TheIdea';
import Products from './components/Products';
import Process from './components/Process';
import WhyIndia from './components/WhyIndia';
import GlobalReach from './components/GlobalReach';
import WhoWeWorkWith from './components/WhoWeWorkWith';
import RFQForm from './components/RFQForm';
import Contact from './components/Contact';
import FooterSection from './components/FooterSection';

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <TheIdea />
        <Products />
        <Process />
        <WhyIndia />
        <GlobalReach />
        <WhoWeWorkWith />
        <RFQForm />
        <Contact />
      </main>
      <FooterSection />
    </>
  );
}
