import React from "react";
import { Helmet } from "react-helmet";

const defaultHelmet: React.FC = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="The ultimate Legion TD Mega Wiki, with all Units, Builders, Waves, Summons and King info. Based on Warcraft 3 (III) custom map version 3.5 (B4)"
        />

        <title>Legion TD Mega Wiki | Warcraft 3 (III) Edition</title>
      </Helmet>
    </div>
  );
};

export default defaultHelmet;
