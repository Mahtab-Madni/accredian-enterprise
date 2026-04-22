"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import AccredianEdge from "./components/AccredianEdge";
import CAT from "./components/CAT";
import HowItWorks from "./components/HowItWorks";
import FAQs from "./components/FAQs";
import Testimonials from "./components/Testimonials";
import LeadFormModal from "./components/LeadForm";
import Footer from "./components/Footer";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <main>
      <Navbar />
      <Hero onOpenForm={openForm} />
      <Stats />
      <AccredianEdge />
      <CAT />
      <HowItWorks />
      <FAQs onOpenForm={openForm} />
      <Testimonials onOpenForm={openForm} />
      <LeadFormModal isOpen={isFormOpen} onClose={closeForm} />
      <Footer onOpenForm={openForm} />
    </main>
  );
}
