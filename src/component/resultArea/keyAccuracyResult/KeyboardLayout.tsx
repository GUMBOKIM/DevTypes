import React from "react";
import styled from "styled-components";

const KeyboardLayout: React.FC = () => {
    return (
        <KeyboardContainer>
            {KeyCapsData.map((row, rowIndex) => <KeyRow key={rowIndex}>
                {row.map((col, colIndex) => <KeyCap key={colIndex} keycap={col}/>)}
            </KeyRow>)}
        </KeyboardContainer>
    )
}

const KeyboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const KeyRow = styled.div`
  display: flex;
`

const KeyCap: React.FC<{ keycap: IKeyCap }> = ({keycap}) => {
    const {size, lower, upper, accuracy = 100} = keycap;

    if (lower && upper) {
        return (
            <KeyCapSize size={size} accuracy={accuracy}>
                <KeyCapBox>
                    <TextUpper>{upper}</TextUpper>
                    <TextLower>{lower}</TextLower>
                </KeyCapBox>
            </KeyCapSize>
        )
    } else if (lower) {
        return (
            <KeyCapSize size={size} accuracy={accuracy}>
                <KeyCapBox>
                    <span>{lower}</span>
                </KeyCapBox>
            </KeyCapSize>
        )
    } else {
        return (
            <KeyCapSize size={size} accuracy={accuracy}>
                <KeyCapBox/>
            </KeyCapSize>
        )
    }
}

const KeyCapSize = styled.div<{ size: number; accuracy: number }>`
  box-sizing: border-box;
  padding: 0.2rem;
  width: ${props => props.size * 3}rem;
  height: 3rem;
  color: ${({accuracy}) => {
    const redRatio = accuracy >= 60 ? (100 - accuracy) / 30 : 1;
    return `rgb(${Math.floor((255 - 169) * redRatio + 169)}, 169, 169)`;
  }}
`

const KeyCapBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;;

  box-sizing: border-box;
  padding: 0.3rem;
  border: 3px solid darkgrey;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

`

const TextUpper = styled.span`
  position: absolute;
  top: 0rem;
  left: 0.3rem;
`

const TextLower = styled.span`
  position: absolute;
  top: 1rem;
  right: 0.3rem;
`

interface IKeyCap {
    size: number;
    upper?: string;
    lower?: string;
    accuracy?: number;
}

const KeyCapsData: IKeyCap[][] = [
    [
        {size: 1, upper: `~`, lower: `\``},
        {size: 1, upper: `!`, lower: `1`},
        {size: 1, upper: `@`, lower: `2`},
        {size: 1, upper: `#`, lower: `3`},
        {size: 1, upper: `$`, lower: `4`},
        {size: 1, upper: `%`, lower: `5`},
        {size: 1, upper: `^`, lower: `6`},
        {size: 1, upper: `&`, lower: `7`},
        {size: 1, upper: `*`, lower: `8`},
        {size: 1, upper: `(`, lower: `9`},
        {size: 1, upper: `)`, lower: `0`},
        {size: 1, upper: `_`, lower: `-`},
        {size: 1, upper: `+`, lower: `=`},
        {size: 2},
    ],
    [
        {size: 1.5},
        {size: 1, upper: `Q`, lower: `q`},
        {size: 1, upper: `W`, lower: `w`},
        {size: 1, upper: `E`, lower: `e`},
        {size: 1, upper: `R`, lower: `r`},
        {size: 1, upper: `T`, lower: `t`},
        {size: 1, upper: `Y`, lower: `y`},
        {size: 1, upper: `U`, lower: `u`},
        {size: 1, upper: `I`, lower: `i`},
        {size: 1, upper: `O`, lower: `o`},
        {size: 1, upper: `P`, lower: `p`},
        {size: 1, upper: `{`, lower: `[`},
        {size: 1, upper: `}`, lower: `]`},
        {size: 1.5, upper: `|`, lower: `\\`},
    ],
    [
        {size: 1.75},
        {size: 1, upper: `A`, lower: `a`},
        {size: 1, upper: `S`, lower: `s`},
        {size: 1, upper: `D`, lower: `d`},
        {size: 1, upper: `F`, lower: `f`},
        {size: 1, upper: `G`, lower: `g`},
        {size: 1, upper: `H`, lower: `h`},
        {size: 1, upper: `J`, lower: `j`},
        {size: 1, upper: `K`, lower: `k`},
        {size: 1, upper: `L`, lower: `l`},
        {size: 1, upper: `:`, lower: `;`},
        {size: 1, upper: `"`, lower: `'`},
        {size: 2.25, lower: `enter`},
    ],
    [
        {size: 2.25, lower: `shift`},
        {size: 1, upper: `Z`, lower: `z`},
        {size: 1, upper: `X`, lower: `x`},
        {size: 1, upper: `C`, lower: `c`},
        {size: 1, upper: `V`, lower: `v`},
        {size: 1, upper: `B`, lower: `b`},
        {size: 1, upper: `N`, lower: `n`},
        {size: 1, upper: `M`, lower: `m`},
        {size: 1, upper: `<`, lower: `,`},
        {size: 1, upper: `>`, lower: `.`},
        {size: 1, upper: `?`, lower: `/`},
        {size: 2.75},
    ],
    [
        {size: 1.25},
        {size: 1.25},
        {size: 1.25},
        {size: 6.25, lower: `space bar`},
        {size: 1.25},
        {size: 1.25},
        {size: 1.25},
        {size: 1.25},
    ]
]


export default KeyboardLayout;