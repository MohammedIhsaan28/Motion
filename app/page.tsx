import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import HowItWorks from "@/components/HowItWorks";
import KeyFeatures from "@/components/KeyFeatures";
import PricingPlans from "@/components/PricingPlans";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import "@/app/globals.css";
export default function Page() {
  return (
    <main className="text-sm text-neutral-300 antialiased">
      <Navbar/>
      <HeroSection/>
      <HowItWorks/>
      <KeyFeatures/>
      <PricingPlans/>
      <Testimonials/>
      <Footer/>

    </main>
    
  )
}