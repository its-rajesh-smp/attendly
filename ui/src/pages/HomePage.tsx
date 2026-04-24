import AboutSection from "@/components/home/AboutSection";
import CurrentEventsSection from "@/components/home/CurrentEventsSection";
import HelpSection from "@/components/home/HelpSection";
import HeroSection from "@/components/home/HeroSection";
import Footer from "@/components/ui/Footer";

const HomePage = () => {
  return (
    <div className=" relative min-h-screen flex flex-col">
      <HeroSection />
      <AboutSection />
      <CurrentEventsSection />
      <HelpSection />
      <Footer />
    </div>
  );
};

export default HomePage;
