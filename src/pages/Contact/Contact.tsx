import styled from "styled-components";
import { BubbleSection, InfoCard, InfoCardData } from "../../components";
import pjImg from "../../assets/images/pj2.png";

const StyledContactPage = styled.section`
  min-height: 100vh;
  z-index: 4;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 2rem;
`;

const infoCard: InfoCardData = {
  legend: "Petter Jakobsson",
  img: pjImg,
  title: "Contact",
  secondTitle: "Phone: +46 735-876724",
  thirdTitle: "Mail: petterjakobsson9206@gmail.com",
  text: "Curious to talk to you regardless of who you are, potential employer, future customer or just a fellow code enthusiast. I am currently looking for work remote or in Gothenburg.",
};

export const Contact = () => {
  return (
    <BubbleSection>
      <StyledContactPage>
        <InfoCard cardContent={infoCard} wide />
      </StyledContactPage>
    </BubbleSection>
  );
};
