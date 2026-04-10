import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import HowItWorks from "./components/HowItWorks";
import UrgencyBar from "./components/UrgencyBar";
import Deliverables from "./components/Deliverables";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ChallengeForm from "./components/ChallengeForm";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <UrgencyBar />
      <Deliverables />
      <Testimonials />
      <FAQ />
      <ChallengeForm />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}
