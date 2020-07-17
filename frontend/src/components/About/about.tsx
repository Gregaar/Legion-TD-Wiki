import React from "react";

import EmailLogo from "../../assets/email-logo.png";
import GitHubLogo from "../../assets/github-logo.png";
import {
  A,
  FAQContainer,
  Img,
  ImgContainer,
  MainHeading,
  PA,
  PQ,
} from "./about-styles";

const about: React.FC = () => {
  return (
    <React.Fragment>
      <MainHeading>About</MainHeading>
      <FAQContainer>
        <PQ>Q. What's the purpose of this site?</PQ>
        <PA>
          To provide an easy way of finding information relating to Legion TD.
          One of the most difficult parts about playing this game is learning
          the Units and Builders, as you only know what they're capable of after
          using them. However, using this site, you can check units, builders
          and more prior to or whilst you're playing!
        </PA>
        <br />
        <PQ>Q. What version of Legion TD is this for?</PQ>
        <PA>
          The Warcraft III custom map Legion TD 3.5 (B4). None of this
          information is taken from the standalone Legion TD 2 game.
        </PA>
        <br />
        <PQ>Q. How was the information gathered?</PQ>
        <PA>
          Manually, using{" "}
          <A
            href="https://wc3.rivsoft.net/"
            rel="noopener noreferrer"
            target="_blank"
          >
            this
          </A>{" "}
          handy website.
        </PA>
        <br />
        <PQ>Q. Can I use the data for my own project?</PQ>
        <PA>
          Sure! You can find a copy of the .csv files{" "}
          <A
            href="https://github.com/Gregaar/Legion-TD-Wiki/tree/master/data-import/data/csv"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </A>
        </PA>
        <br />
        <PQ>Q. Something is wrong! It needs to be fixed ASAP!</PQ>
        <PA>
          Please use the below to get in touch so we can fix the grotesque
          mistake immediately!
        </PA>
        <br />
      </FAQContainer>
      <ImgContainer>
        <A
          href="https://github.com/Gregaar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img src={GitHubLogo} alt="Github Logo" />
        </A>
        <A href="mailto:gregor@gregorfra.me">
          <Img src={EmailLogo} alt="Email Logo" />
        </A>
      </ImgContainer>
    </React.Fragment>
  );
};

export default about;
