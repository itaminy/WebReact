import React, { useState } from "react";
import { Cases } from "./sections/Cases";
import { Header } from "./sections/Header";
import { Partners } from "./sections/Partners";
import { Plans } from "./sections/Plans";
import { Reviews } from "./sections/Reviews";
import { Services } from "./sections/Services";
import { Support } from "./sections/Support";
import { Team } from "./sections/Team";
import { Webform } from "./sections/Webform";
import { Modal } from "./components/Modal";
import { Faq } from "./sections/Faq";
import "./style.css";

import D from "../../assets/img/D.svg"

export const DrupalCoder = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="drupal-coder" data-model-id="94:260">
            <Header onOpenModal={openModal} onNavigate={scrollToSection} />
            <Services />
            <Support />
            <Plans onOpenModal={openModal} />
            <div className="d-2">
                <img
                    className="d-background"
                    alt="D background"
                    src={D}
                />
                <img
                    className="rectangle-21"
                    alt="Rectangle"
                    src="https://c.animaapp.com/mixkm5sjC7HSqN/img/rectangle-2.svg"
                />
            </div>
            <Cases />
            <Team />
            <Reviews />
            <Partners />
            <Faq />
            <Webform />
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};
