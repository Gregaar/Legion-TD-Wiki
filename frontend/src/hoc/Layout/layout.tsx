import * as React from "react";

import { useAuthContext } from "../AuthContext/auth-context";

import Header from "../../components/Navigation/Header/header";
import Footer from "../../components/Navigation/Footer/footer";

const layout = ({ children }: {children: React.ReactNode}) => {

    return (
        <React.Fragment>
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    )
}

export default layout;