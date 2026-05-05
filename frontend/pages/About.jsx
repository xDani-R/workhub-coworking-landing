import AboutHero from "../src/components/About/AboutHero";
import AboutBanner from "../src/components/About/AboutBanner";
import AboutGallery from "../src/components/About/AboutGallery";
import AboutArchitecture from "../src/components/About/AboutArchitecture";

const About = () => {
    return (
        <div>
            <AboutHero />
            <AboutGallery />
            <AboutBanner />
            <AboutArchitecture />
        </div>
    );
};

export default About;