import React, {useEffect, useState} from "react";
import * as S from "./GlobalModal.style"
import ConeIcon from "./ConeIcon";

const GlobalModal: React.FC = () => {
    const [isBlur, setIsBlur] = useState(true);
    const [message, setMessage] = useState("");

    useGlobalEvent(setIsBlur, setMessage);

    if (isBlur) {
        return (
            <S.GlobalModalBackground>
                <ConeIcon/>
                <S.GlobalModalMessage>{message}</S.GlobalModalMessage>
            </S.GlobalModalBackground>
        )
    }
    return null;
}


const useGlobalEvent = (setIsBlur: (value: boolean) => void, setMessage: (value: string) => void) => {
    const checkWindowSize = () => {
        if (window.innerWidth >= 800) {
            setIsBlur(false);
        } else {
            setIsBlur(true);
            setMessage("This website can be used in width 800px or larger.");
        }
    }

    const checkFocusOut = () => {
        setIsBlur(true);
        setMessage("Click or press any key to focus this website ");
    }

    const checkFocusIn = () => {
        setIsBlur(false);
    }

    useEffect(() => {
        checkWindowSize();
        window.addEventListener("resize", checkWindowSize);
        window.addEventListener("blur", checkFocusOut);
        window.addEventListener("focus", checkFocusIn);
        return () => {
            window.removeEventListener("resize", checkWindowSize);
            window.removeEventListener("blur", checkFocusOut);
            window.removeEventListener("focus", checkFocusIn);
        }
    })
}


export default GlobalModal;