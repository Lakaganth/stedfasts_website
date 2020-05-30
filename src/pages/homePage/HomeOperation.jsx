import React from "react";
import { HomeOperationContainer, OperationGrid, OpContent } from "./HomeStyles";
import Op1 from "../../assets/operation1.png";
import Op2 from "../../assets/operation2.png";
import Op3 from "../../assets/operation3.png";
import ScrollAnimation from "react-animate-on-scroll";

export const HomeOperation = () => {
  return (
    <HomeOperationContainer>
      <p className="title">
        How We <span>Operate</span>
      </p>

      <OperationGrid>
        <ScrollAnimation animateIn="zoomInLeft">
          <img src={Op1} alt="Fast Delivery" />
        </ScrollAnimation>
        <OperationContent
          opTitle="Super-fast Delivery"
          opContent="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard"
        />
        <OperationContent
          opTitle="Deliver
          Documents 
          & Packages"
          opContent="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard"
        />
        <ScrollAnimation animateIn="slideInRight">
          <img
            src={Op2}
            alt="Deliver
            Documents 
            & Packages"
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="slideInUp">
          <img
            src={Op3}
            alt="Warehouse
          Fulfillment"
          />
        </ScrollAnimation>
        <OperationContent
          opTitle="Warehouse
          Fulfillment"
          opContent="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard"
        />
      </OperationGrid>
    </HomeOperationContainer>
  );
};

const OperationContent = ({ opTitle, opContent }) => {
  return (
    <OpContent>
      <p>{opTitle}</p>
      <p>{opContent}</p>
    </OpContent>
  );
};
