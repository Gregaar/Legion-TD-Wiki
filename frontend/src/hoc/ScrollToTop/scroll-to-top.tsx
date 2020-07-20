import React, { useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

const ScrollToTop: React.FC<RouteComponentProps> = ({ history, children }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default withRouter(ScrollToTop);
