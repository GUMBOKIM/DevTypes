import React, {useEffect, useState} from "react";
import styled from "styled-components";

const CountDown: React.FC<{ moveNextScene: () => void }> = ({moveNextScene}) => {
    const [count, setCount] = useState<number>(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count => count - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [])

    useEffect(() => {
        if(count === 0) {
            moveNextScene();
        }
    }, [count])

    return (
            <CountNumber>{count}</CountNumber>
    )
}

const CountNumber = styled.div`
    font-size: 10rem;
    color: white;
`

export default CountDown;