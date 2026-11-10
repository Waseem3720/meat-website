import TopBar from "@/components/layout/TopBar";
import SiteHeader from "@/components/layout/SiteHeader";
import HeroSection from "@/components/sections/HeroSection";
import ExploreSolutionsSection from "@/components/sections/ExploreSolutionsSection";
import BusinessGrowthSection from "@/components/sections/BusinessGrowthSection";
import CreativeIdeasSection from "@/components/sections/CreativeIdeasSection";
import CustomerCareStrip from "@/components/sections/CustomerCareStrip";
import FutureSection from "@/components/sections/FutureSection";
import MissionSection from "@/components/sections/MissionSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import DownloadAppSection from "@/components/sections/DownloadAppSection";
import TeamSection from "@/components/sections/TeamSection";
import SiteFooter from "@/components/layout/SiteFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-paper">
      <TopBar />
      <SiteHeader />
      <main>
        <HeroSection />
        <ExploreSolutionsSection />
        <BusinessGrowthSection />
        <CreativeIdeasSection />
        <CustomerCareStrip />
        <FutureSection />
        <MissionSection />
        <ExperienceSection />
        <DownloadAppSection />
        <TeamSection />
      </main>
      <SiteFooter />
    </div>
  );
}
