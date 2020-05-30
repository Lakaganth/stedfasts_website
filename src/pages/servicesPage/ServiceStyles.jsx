import styled from "styled-components";
import media from "styled-media-query";
import ServicesBG from "../../assets/services_bg.png";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const ServiceHeroContainer = styled.div`
  
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  overflow: hidden;
  background:url('${ServicesBG}') no-repeat center center fixed;
  background-size: cover;
  padding: 20vh 0;
  border-radius: 0 0 150px 150px; 

  ${media.lessThan("small")`
  display:flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
  `}


  .content {
    p:nth-child(1) {
      font-family: Red Hat Display;
      font-style: normal;
      font-weight: bold;
      font-size: 42px;
      line-height: 42px;
      text-transform: uppercase;
      color: #ffb904;
      padding: 0 0 5vh 10vw;
    }
    p:nth-child(2) {
      font-family: Red Hat Text;
      font-style: normal;
      font-weight: normal;
      font-size: 34px;
      line-height: 42px;
      color: #ffffff;
      padding: 0 5vw 0 10vw;
    }
  }
  .hero-img{
    img{
      width:120%;
      ${media.lessThan("small")`
      width:100%;
  `}

    }
  }
`;

export const ServiceBoxPageContainer = styled.div`
  width: 100vw;
`;
export const SerBox = styled.div`
  background: linear-gradient(158.44deg, #3a2689 13.66%, #a397d2 78.88%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  overflow: hidden;
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: bold;
  margin: 5vh 5vw;
  padding: 5vh 0;

  ${media.lessThan("small")`
  display: flex;
  flex-direction: column;
   justify-content: center;
   align-items: center;
   img{
     width:100%;
   }
  `}

  .content {
    padding: 0 5vw;

    p:nth-child(1) {
      font-size: 42px;
      line-height: 56px;
      text-transform: uppercase;
      color: #ffb904;
    }

    p:nth-child(2) {
      font-size: 32px;
      line-height: 42px;
      text-transform: uppercase;
      color: #ffffff;
      padding: 25px 0;
    }

    p:nth-child(3) {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      color: #e4e4e4;
    }
  }
`;
