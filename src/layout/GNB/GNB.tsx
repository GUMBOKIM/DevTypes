import React from "react";
import * as S from "./GNB.style"
import GNBHome from "./GNBHome";
import HeaderMenus from "./GNBMenu";

const GNB: React.FC = () => {

    return (
        <S.HeaderContainer>
            <GNBHome/>
            <HeaderMenus/>
        </S.HeaderContainer>
    )
}

export default GNB;