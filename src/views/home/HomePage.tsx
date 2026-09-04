import type { BlogMeta } from "../../types/BlogType";
import HeroSection from "../../components/portfolio/sections/HeroSection";
import CredibilityStrip from "../../components/portfolio/sections/CredibilityStrip";
import SelectedBuildsSection from "../../components/portfolio/sections/SelectedBuildsSection";
import AboutSection from "../../components/portfolio/sections/AboutSection";
import ExperienceSection from "../../components/portfolio/sections/ExperienceSection";
import WritingSection from "../../components/portfolio/sections/WritingSection";
import ContactSection from "../../components/portfolio/sections/ContactSection";

type HomePageProps = { recentPosts: BlogMeta[] };

const HomePage = ({ recentPosts }: HomePageProps) => {
  return (
    <div className="portfolio-root">
      <HeroSection />
      <CredibilityStrip />
      <SelectedBuildsSection />
      <AboutSection />
      <ExperienceSection />
      <WritingSection posts={recentPosts} />
      <ContactSection />
    </div>
  );
};

export default HomePage;
