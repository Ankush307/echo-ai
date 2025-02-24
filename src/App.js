import './App.css';
import BackToTop from './common/BackToTop';
import Footer from './common/Footer';
import AiResults from './components/AiResults';
import Faq from './components/Faq';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <Hero />
      <AiResults />
      <Testimonials />
      <Faq />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
