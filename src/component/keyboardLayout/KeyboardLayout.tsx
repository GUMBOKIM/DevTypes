import React from "react";
import * as S from "./KeyboardLayout.style";
import {IKeyCap, KeyCapsData} from "./KeyInfo";

const KeyboardLayout = React.forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <S.KeyboardContainer ref={ref}>
            {KeyCapsData.map((row, rowIndex) => <S.KeyRow key={rowIndex}>
                {row.map((keyData, colIndex) => <KeyCap key={colIndex} {...keyData}/>)}
            </S.KeyRow>)}
        </S.KeyboardContainer>
    )
});

const KeyCap: React.FC<IKeyCap> = ({keyCode, size, lower, upper, center}) => {
    let inner = null;
    if (lower) {
        inner = (
            <>
                <S.TextUpper>{upper}</S.TextUpper>
                <S.TextLower>{lower}</S.TextLower>
            </>
        )
    } else if (center) {
        inner = <S.TextCenter>{center}</S.TextCenter>
    }

    return (
        <S.KeyCapOuter id={keyCode} unitSize={size}>
            <S.KeyCapInner>
                {inner}
            </S.KeyCapInner>
        </S.KeyCapOuter>
    )
}


export default React.memo(KeyboardLayout);