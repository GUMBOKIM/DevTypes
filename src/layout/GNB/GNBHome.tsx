import React from "react";
import * as S from "./GNB.style"
import {useNavigate} from "react-router-dom";

const GNBHome: React.FC = () => {
    const navigate = useNavigate();
    return (
        <S.GNBHomeContainer onClick={() => navigate("/home")}>
            <DevTypesLogo />
            <S.GNBTitle>
                <span>Dev Types</span>
            </S.GNBTitle>
        </S.GNBHomeContainer>
    )
}

export const DevTypesLogo = () =>
    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
        <polygon  style={{fill: "#1779E6"}} points="15.4,37 2.3,23.9 15.6,10.6 18.9,13.9 9,23.8 18.8,33.6 "/>
        <polygon style={{fill: "#8151A3"}} points="32.5,37.2 29.2,33.9 39.2,24 29.3,14.1 32.6,10.9 45.7,23.9 "/>
    </svg>

export default GNBHome;