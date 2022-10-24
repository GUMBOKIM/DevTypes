import React, {useEffect, useRef} from "react";
import KeyboardLayout from "../keyboardLayout/KeyboardLayout";
import './AnimationKeyboard.css';

const AnimationKeyboard: React.FC = () => {
    const keyboardRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const keyPressEvent = (e: KeyboardEvent) => {
            const keyboard = keyboardRef.current
            if (keyboard) {
                let key = e.code;
                const keyCapInner = keyboard.querySelector(`#${key}`)?.children.item(0);
                if (keyCapInner) {
                    keyCapInner.classList.add('active');
                    setTimeout(() => keyCapInner.classList.remove('active'), 100);
                }
            }
        }

        window.addEventListener('keydown', keyPressEvent);
        return () => {
            window.removeEventListener('keydown', keyPressEvent);
        }
    }, [])

    return <KeyboardLayout ref={keyboardRef}/>
}

export default AnimationKeyboard;