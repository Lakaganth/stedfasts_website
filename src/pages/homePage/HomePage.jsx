import React from "react";

import Hero from "../../assets/hero.png";
import Feat1 from "../../assets/feat1.svg";
import Feat2 from "../../assets/feat2.svg";
import Feat3 from "../../assets/feat3.svg";

import {
  Container,
  HeroContainer,
  HeroTrailing,
  FeatureGrid,
} from "./HomeStyles";

import { HomeFeatureBox } from "./HomeFeatureBox";
import { HomeQualityBox } from "./HomeQualityBox";
import { HomeOperation } from "./HomeOperation";
import { HomeMission } from "./HomeMission";
import ScrollAnimation from "react-animate-on-scroll";

export const HomePage = () => {
  return (
    <Container>
      <HeroContainer>
        <div className="hero-content">
          <p>Quick & Reliable</p>
          <p>Dropship!</p>
          <p>
            Our delivery services enables your business to achieve the next
            level
          </p>

          <button>Services</button>
        </div>
        <div className="hero-img">
          <img src={Hero} alt="Hero img" />
        </div>
      </HeroContainer>

      <HeroTrailing>
        <p>Delivering The Best Global</p>
        <p>Logistics Solutions</p>
      </HeroTrailing>

      {/* Page -2 BEGINS */}
      <ScrollAnimation
        animateIn="bounceIn"
        // animateOut="bounceUp"
        delay={300}
        duration={1.2}
        animateOnce="true"
      >
        <FeatureGrid>
          <HomeFeatureBox
            featImg={Feat1}
            feattitle="On-time Delivery"
            featDesc="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard"
          />
          <HomeFeatureBox
            featImg={Feat2}
            feattitle="Safe &
          Secure "
            featDesc="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard"
          />
          <HomeFeatureBox
            featImg={Feat3}
            feattitle="Sortation services"
            featDesc="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard"
          />
        </FeatureGrid>
      </ScrollAnimation>
      {/* Page-2 ENDS */}
      {/* Page-3 Begins */}
      <HomeQualityBox />
      {/* Page-3 ENDS */}
      {/* Page-4 Begins */}
      <HomeOperation />
      {/* Page-4 ENDS */}
      {/* Page-5 Begins */}
      <HomeMission />
      {/* Page-5 ENDS */}
    </Container>
  );
};