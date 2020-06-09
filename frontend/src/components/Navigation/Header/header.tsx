import * as React from "react";
import styled from "styled-components";
import NavigationItems from "../NavigationItems/navigation-items";

const Header = styled.header`
    height: 75px;
    opacity: 0.75;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    background-color: rgba(68, 89, 106, 0.8);
    border-radius: 5px;
    position: unset;
    border: 2px solid yellow;
`

const header = () => {
    return (
        <Header>
            <nav>
                <NavigationItems />
            </nav>
        </Header>
    )
}

export default header;