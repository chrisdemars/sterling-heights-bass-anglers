import Link from "next/link";
import Header from '../components/Header/Header';
import SponsorBar from '../components/SponsorBar/SponsorBar';
import HeroSection from '../components/HeroSection/HeroSection';
import AboutSection from '../components/AboutSection/AboutSection';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <SponsorBar />
      <HeroSection />
      <AboutSection />
      <Footer />
    </>
  );
}
