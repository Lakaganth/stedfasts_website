import React from "react";
import { AdvantageBoxPage, AdBox } from "./AdvantageStyle";
import Advantage1 from "../../assets/advantage1.png";
import Advantage2 from "../../assets/advantage2.png";
import Advantage3 from "../../assets/advantage3.png";
import Advantage4 from "../../assets/advantage4.png";
import ScrollAnimation from "react-animate-on-scroll";

export const AdvantageBox = () => {
  return (
    <AdvantageBoxPage>
      <AdBoxAB
        AdImage={Advantage1}
        AdTitle="Coverage Area"
        AdContent="Our own warehouse and exchange point locations are supplemented by vetted cross-dock and warehouse partners across the country, which allows our fleet of delivery vehicles to span from coast to coast. This unique advantage allows us to provide exceptional speed and service — no matter where your freight is headed."
      />
      <AdBoxBA
        AdImage={Advantage2}
        AdTitle="Quick Turnaround"
        AdContent="Our specialized vehicle options, end-to-end services and superior staff all work to streamline the shipping and delivery process, so you'll see quicker turnaround times and delighted customers."
      />
      <AdBoxAB
        AdImage={Advantage3}
        AdTitle="Full Visibility"
        AdContent="Visibility helps to build trust. We use your technology integrated within our warehouse process — from route planning, to cabin optimization. This gives you a clear view of where your products are at in every stage of the delivery process. Track our turnaround times down to the minute so you can share complete and accurate status reports to your customer at all times."
      />
      <div className="advantage-4">
        <div className="content-div">
          <div></div>
          <div className="content4">
            <p>Diversified Fleet</p>
            <p>
              Get access to the vehicle options you need for your unique freight
              product, at each stage in the shipment and delivery process. From
              five-ton truck to a car — we have the wheels you need
            </p>
          </div>
        </div>
        <img src={Advantage4} alt="Advantage" />
      </div>
    </AdvantageBoxPage>
  );
};

const AdBoxAB = ({ AdImage, AdTitle, AdContent }) => {
  return (
    <AdBox>
      <ScrollAnimation animateIn="fadeInLeftBig" animateOnce="true">
        <img src={AdImage} alt="Advantages" />
      </ScrollAnimation>

      <div className="content">
        <p>{AdTitle}</p>
        <p>{AdContent}</p>
      </div>
    </AdBox>
  );
};
const AdBoxBA = ({ AdImage, AdTitle, AdContent }) => {
  return (
    <AdBox>
      <div className="content">
        <p>{AdTitle}</p>
        <p>{AdContent}</p>
      </div>
      <ScrollAnimation animateIn="fadeInRightBig" animateOnce="true">
        <img src={AdImage} alt="Advantages" />
      </ScrollAnimation>
    </AdBox>
  );
};
