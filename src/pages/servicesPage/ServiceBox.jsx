import React from "react";
import { ServiceBoxPageContainer, SerBox } from "./ServiceStyles";
import Service1 from "../../assets/service1.png";
import Service2 from "../../assets/service2.png";
import Service3 from "../../assets/service3.png";

export const ServiceBoxPage = () => {
  return (
    <ServiceBoxPageContainer>
      <ServiceBoxAB
        serviceImage={Service1}
        serviceTitle="Home Delivery"
        serviceSubtitle="From warehouse to welcome mat."
        serviceText="Our process can be trusted to be timely and accurate, providing you with full visibility until the product arrives safely in the hands of your customer."
      />

      <ServiceBoxBA
        serviceImage={Service2}
        serviceTitle="E-Commerce Delivery"
        serviceSubtitle="Every day we customize our solutions to meet your unique delivery needs in a way our larger competitors can't. "
        serviceText="We manage the various behind-the-scenes activities necessary to get your product from you to your customers, allowing you to focus on growing your business."
      />
      <ServiceBoxAB
        serviceImage={Service3}
        serviceTitle="Sortation Services"
        serviceSubtitle="Getting your products to your customers starts in the warehouse."
        serviceText="Our sortation experts pick and pack up to 20,000 packages a night — per warehouse — proceeding to stage these items from prompt delivery same day or next day."
      />
    </ServiceBoxPageContainer>
  );
};

const ServiceBoxAB = ({
  serviceImage,
  serviceTitle,
  serviceSubtitle,
  serviceText,
}) => {
  return (
    <SerBox>
      <div className="serImg">
        <img src={serviceImage} alt="Services" />
      </div>
      <div className="content">
        <p>{serviceTitle}</p>
        <p>{serviceSubtitle}</p>
        <p>{serviceText}</p>
      </div>
    </SerBox>
  );
};
const ServiceBoxBA = ({
  serviceImage,
  serviceTitle,
  serviceSubtitle,
  serviceText,
}) => {
  return (
    <SerBox>
      <div className="content">
        <p>{serviceTitle}</p>
        <p>{serviceSubtitle}</p>
        <p>{serviceText}</p>
      </div>
      <div className="serImg">
        <img src={serviceImage} alt="Services" />
      </div>
    </SerBox>
  );
};
