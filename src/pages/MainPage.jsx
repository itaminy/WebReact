import React from "react";
import { useState } from "react";

import { WebformModal } from "../components/WebformModal/WebformModal";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Partners from "../components/Partners/Partners";
import Team from "../components/Team/Team";
import Testimonials from "../components/Testimonials/Testimonials";
import Faq from "../components/Faq/Faq";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import Support from "../components/Support/Support";
import Tariffs from "../components/Tariffs/Tariffs";
import MidServices from "../components/MidServices/MidServices"
import Cases from "../components/Cases/Cases"

export default function MainPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  return (
    <>
      <Header />
      <Hero onOpenModal={() => setIsFormOpen(true)} />
      <Services />
      <Support/>
      <Tariffs/>
      <MidServices />
      <Team />
      <Cases />
      <Testimonials />
      <Partners />
      <Faq />
      <ContactForm />
      <WebformModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </>
  );
}