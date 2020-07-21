import React from "react";
import { Helmet } from "react-helmet";

const defaultHelmet: React.FC = () => {
  return (
    <div>
      <Helmet>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="The ultimate Legion TD Mega Wiki, with all Units, Builders, Waves, Summons and King info. Based on Warcraft 3 (III) custom map version 3.5 (B4)"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>Legion TD Mega Wiki | Ultimate Edition</title>
      </Helmet>
    </div>
  );
};

export default defaultHelmet;
