import styled from "styled-components";
import { BubbleSection, InfoCard, InfoCardData } from "../../components";
import pjImg from "../../assets/images/pj2.png";

const StyledContactPage = styled.section`
  min-height: calc(100vh - 63px); // - header height
  margin-top: 63px; // headerHeight
  z-index: 4;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 2rem;
`;

const infoCardData: InfoCardData = {
  legend: "Petter Jakobsson",
  img: pjImg,
  title: "Contact",
  secondTitle: "Phone: +46 735-876724",
  thirdTitle: "Mail: petterjakobsson9206@gmail.com",
  text: "Feel free to reach out, whether you're a potential employer, future client, or fellow developer. I'm currently open to remote opportunities or roles based in Gothenburg.",
};

export const Contact = () => {
  return (
    <BubbleSection>
      <StyledContactPage>
        <InfoCard cardContent={infoCardData} large />
      </StyledContactPage>
    </BubbleSection>
  );
};
