import AppLayout from "@/Layouts/AppLayout";
import HeroSection from "@/Components/Home/HeroSection";
import AboutSection from "@/Components/Home/AboutSection";
import ProjectSection from "@/Components/Home/ProjectSection";

export default function Home() {
    return (
        <AppLayout title="Home">
            {/* Hero Section */}
            <HeroSection />

            {/* About Me Section */}
            <AboutSection />

            {/* Projects Section */}
            <ProjectSection/>

        </AppLayout>
    );
}
