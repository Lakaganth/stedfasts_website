import React from "react";

import ServiceHero from "../../assets/service_hero.png";
import { Container, ServiceHeroContainer } from "./ServiceStyles";
import { ServiceBoxPage } from "./ServiceBox";
import ScrollAnimation from "react-animate-on-scroll";
import { Footer } from "../../components/UI/Footer";

export const ServicesPage = () => {
  return (
    <Container>
      <ScrollAnimation animateIn="slideInDown">
        <ServiceHeroContainer>
          <ScrollAnimation animateIn="slideInLeft" delay={600}>
            <div className="content">
              <p>Our Services</p>
              <p>
                Our range of services support key stages of your supply chain
                process, especially in the crucial final mile. While Stedfasts majorly
                focuses on the final mile, we have dedicated teams handling
                first mile and mid mile requirements.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="slideInRight" delay={600}>
            <div className="hero-img">
              <img src={ServiceHero} alt="STP Services" />
            </div>
          </ScrollAnimation>
        </ServiceHeroContainer>
      </ScrollAnimation>
      <ServiceBoxPage />
      <Footer />
    </Container>
  );
};
