import React from "react";
import {
  MainHeading,
  HeadingTwo,
  Img,
  TextContainer,
  Paragraph,
  A,
  NavLinkStyled,
} from "./homepage-styles";
import mapImage from "../../assets/map-image.png";

const homepage: React.FC = () => {
  return (
    <React.Fragment>
      <MainHeading>Legion TD Mega Wiki</MainHeading>
      <HeadingTwo>Based on Version 3.5 (B4)</HeadingTwo>
      <Img src={mapImage} alt="The Legion TD map" />
      <TextContainer>
        <Paragraph>
          All of the information used throughout the site is taken from the 3.5
          (B4) map, which can be downloaded from the{" "}
          <A
            href="https://www.hiveworkshop.com/threads/legion-td-mega-3-5-b4-3-41-unprotect.194224/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hive Workshop
          </A>
          .{" "}
        </Paragraph>
        <br />
        <Paragraph>
          This map can be played on either Warcraft III: Frozen Throne or
          Warcraft III: Reforged.
        </Paragraph>
        <br />
        <Paragraph>
          The map itself can be played in either PvP or PvE modes and can be
          played with up to a maximum of 8 players.
        </Paragraph>
        <br />
        <Paragraph>
          Throughout the wiki, you can find information regarding the Units,
          Builders, Waves, Summons and the King.
        </Paragraph>
        <br />
        <Paragraph>
          If you have any ideas for additional content, or notice any mistakes,
          you can find contact information on the{" "}
          <NavLinkStyled to="/about">About</NavLinkStyled> page.
        </Paragraph>
        <br />
        <br />
        <Paragraph>Happy Tower Defending!</Paragraph>
      </TextContainer>
    </React.Fragment>
  );
};

export default homepage;
