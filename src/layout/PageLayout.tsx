import React from "react";
import * as S from "./PageLayout.style"
import GNB from "./GNB/GNB";
import {Outlet} from "react-router-dom";

const PageLayout: React.FC = () => {
    return (
        <S.PageContainer>
            <GNB/>
            <S.ContentWrapper>
                <Outlet/>
            </S.ContentWrapper>
        </S.PageContainer>
    )
}

export default PageLayout;