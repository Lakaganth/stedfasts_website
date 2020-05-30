import React from "react";
import { Container, AdvantageHeroContainer } from "./AdvantageStyle";
import { AdvantageBox } from "./AdvantageBox";
import ScrollAnimation from "react-animate-on-scroll";

export const AdvantagePage = () => {
  return (
    <Container>
      <AdvantageHeroContainer>
        <div className="curved-container">
          <ScrollAnimation animateIn="zoomIn" animateOnce="true">
            <p className="title">Our Advantage</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="zoomIn" delay="600" animateOnce="true">
            <p className="content">
              Our four key advantages are the pillars of excellence that set us
              apart. We aim to deliver exceptional services to our clients so
              they can extend the reach of their product and their brand, and
              ultimately grow their business
            </p>
          </ScrollAnimation>
        </div>
        {/* <img src={AdvantageHero} alt="Advantage" /> */}
      </AdvantageHeroContainer>
      <AdvantageBox />
    </Container>
  );
};
