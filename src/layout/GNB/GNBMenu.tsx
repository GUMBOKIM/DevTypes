import React, {useEffect, useState} from "react";
import * as S from "./GNB.style"
import {useLocation, useNavigate} from "react-router-dom";
import PageInfo from "../../pages/PageInfo";

const GNBMenu: React.FC = () => {
    const [selectMenu, setSelectMenu] = useState("")
    const location = useLocation();

    useEffect(() => {
        PageInfo.forEach(page => {
            if (page.route === location.pathname) setSelectMenu(page.kind);
        })
    }, [location])

    return (
        <S.GNBItemContainer>
            {PageInfo.map(page =>
                <GNBItem key={page.kind}
                         menuName={page.kind}
                         route={page.route}
                         isSelected={page.kind === selectMenu}/>
            )}
        </S.GNBItemContainer>
    )
}

interface GNBItemProps {
    menuName: string;
    isSelected: boolean;
    route: string;
}

const GNBItem: React.FC<GNBItemProps> = ({menuName, route, isSelected}) => {
    const navigate = useNavigate();
    return (
        <S.GNBItemWrapper isSelected={isSelected} onClick={() => navigate(route)}>
            {menuName}
        </S.GNBItemWrapper>
    )
}

export default GNBMenu;