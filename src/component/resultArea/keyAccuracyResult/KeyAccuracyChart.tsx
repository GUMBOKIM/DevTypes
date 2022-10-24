import React, {useEffect, useRef} from "react";
import {select} from "d3";
import styled from "styled-components";

const KeyAccuracyChart: React.FC = () => {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(()=> {
        console.log(svgRef)
        const svg = select(svgRef.current)
    }, []);

    return (
        <SVGContainer ref={svgRef}></SVGContainer>
    )
}

const SVGContainer = styled.svg`
  width: 100%;
  height: 100%;
  background-color: darkolivegreen;
`

interface IKeyAccuracyBar {
    key: string;
    count: number;
    accuracy: number;
    wrongInputs: {key: string; count: number;}[];
}

const Example: IKeyAccuracyBar[] = [
    {
        key: "a",
        count: 10,
        accuracy: 90,
        wrongInputs: [
            {key: "A", count: 1}
        ]
    },
    {
        key: "b",
        count: 10,
        accuracy: 80,
        wrongInputs: [
            {key: "B", count: 2}
        ]
    },
    {
        key: "c",
        count: 10,
        accuracy: 70,
        wrongInputs: [
            {key: "A", count: 1},
            {key: "B", count: 2}
        ]
    },
]


export default KeyAccuracyChart;