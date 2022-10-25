import React, {useEffect, useRef} from "react";
import KeyboardLayout from "../keyboardLayout/KeyboardLayout";
import './AnimationKeyboard.css';

const AnimationKeyboard: React.FC = () => {
    const keyboardRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const keyDownEvent = (e: KeyboardEvent) => {
            const keyboard = keyboardRef.current
            if (keyboard) {
                let key = e.code;
                const keyCapInner = keyboard.querySelector(`#${key}`)?.children.item(0);
                if (keyCapInner) keyCapInner.classList.add('active');
            }
        }

        const keyUpEvent = (e: KeyboardEvent) => {
            const keyboard = keyboardRef.current
            if (keyboard) {
                let key = e.code;
                const keyCapInner = keyboard.querySelector(`#${key}`)?.children.item(0);
                if (keyCapInner) keyCapInner.classList.remove('active');
            }
        }

        window.addEventListener('keydown', keyDownEvent);
        window.addEventListener('keyup', keyUpEvent);
        return () => {
            window.removeEventListener('keydown', keyDownEvent);
            window.removeEventListener('keyup', keyUpEvent);
        }
    }, [])

    return <KeyboardLayout ref={keyboardRef}/>
}

export default AnimationKeyboard;