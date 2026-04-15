import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Challenge from '../components/Challenge';
import Timeline from '../components/Timeline';
import Sponsors from '../components/Sponsors';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

export default function Home() {
    return (
        <>
            <Hero />
            <Stats />
            <About />
            <Challenge />
            <Timeline />
            <Sponsors />
            <FAQ />
            <CTA />
        </>
    );
}
