import About from "./_components/About";
import Button from "./_components/Button";
import CTA from "./_components/CTA";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import LatestBlogPost from "./_components/LatestBlogPost";
import Navbar from "./_components/Navbar";
import Socials from "./_components/Socials";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <CTA />
      <Testimonials />
      <LatestBlogPost />
      <Socials />
      <Footer />
    </>
  );
}
