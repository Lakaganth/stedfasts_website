import React from "react";
import { QualityContainer, QualityBox } from "./HomeStyles";
import QImg1 from "../../assets/quality1.svg";
import QImg2 from "../../assets/quality2.svg";
import QImg3 from "../../assets/quality3.svg";
import QImg4 from "../../assets/quality4.svg";
import ScrollAnimation from "react-animate-on-scroll";

export const HomeQualityBox = () => {
  return (
    <QualityContainer>
      <p>With our highest Quality to </p>
      <p>Handle Express Delivery</p>
      <div className="quality-grid">
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeOutUp"
          delay={300}
          // animateOnce="true"
        >
          <QualityBoxes
            QImg={QImg1}
            QTitle="Secure Delivery"
            Qdesc="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing"
          />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeOutUp"
          delay={500}
          // animateOnce="true"
        >
          <QualityBoxes
            QImg={QImg2}
            QTitle="Promised Delivery"
            Qdesc="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing"
          />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeOutUp"
          delay={700}
          // animateOnce="true"
        >
          <QualityBoxes
            QImg={QImg3}
            QTitle="Best Pricing"
            Qdesc="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing"
          />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeOutUp"
          delay={900}
          // animateOnce="true"
        >
          <QualityBoxes
            QImg={QImg4}
            QTitle="Complete Support"
            Qdesc="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing"
          />
        </ScrollAnimation>
      </div>
    </QualityContainer>
  );
};

const QualityBoxes = ({ QImg, QTitle, Qdesc }) => {
  return (
    <QualityBox>
      <img src={QImg} alt="Quality" />
      <p>{QTitle}</p>
      <p>{Qdesc}</p>
    </QualityBox>
  );
};
