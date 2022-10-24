export interface IKeyCap {
    size: number;
    upper?: string;
    lower?: string;
    center?: string;
    keyCode?: string;
}

export const KeyCapsData: IKeyCap[][] = [
    [
        {keyCode: 'Backquote', size: 1, upper: `~`, lower: `\``},
        {keyCode: 'Digit1', size: 1, upper: `!`, lower: `1`},
        {keyCode: 'Digit2', size: 1, upper: `@`, lower: `2`},
        {keyCode: 'Digit3', size: 1, upper: `#`, lower: `3`},
        {keyCode: 'Digit4', size: 1, upper: `$`, lower: `4`},
        {keyCode: 'Digit5', size: 1, upper: `%`, lower: `5`},
        {keyCode: 'Digit6', size: 1, upper: `^`, lower: `6`},
        {keyCode: 'Digit7', size: 1, upper: `&`, lower: `7`},
        {keyCode: 'Digit8', size: 1, upper: `*`, lower: `8`},
        {keyCode: 'Digit9', size: 1, upper: `(`, lower: `9`},
        {keyCode: 'Digit0', size: 1, upper: `)`, lower: `0`},
        {keyCode: 'Minus', size: 1, upper: `_`, lower: `-`},
        {keyCode: 'Equal', size: 1, upper: `+`, lower: `=`},
        {keyCode: 'Backspace', size: 2, center: 'BS'},
    ],
    [
        {keyCode: 'Tab_', size: 1.5},
        {keyCode: 'KeyQ', size: 1, upper: `Q`, lower: `q`},
        {keyCode: 'KeyW', size: 1, upper: `W`, lower: `w`},
        {keyCode: 'KeyE', size: 1, upper: `E`, lower: `e`},
        {keyCode: 'KeyR', size: 1, upper: `R`, lower: `r`},
        {keyCode: 'KeyT', size: 1, upper: `T`, lower: `t`},
        {keyCode: 'KeyY', size: 1, upper: `Y`, lower: `y`},
        {keyCode: 'KeyU', size: 1, upper: `U`, lower: `u`},
        {keyCode: 'KeyI', size: 1, upper: `I`, lower: `i`},
        {keyCode: 'KeyO', size: 1, upper: `O`, lower: `o`},
        {keyCode: 'KeyP', size: 1, upper: `P`, lower: `p`},
        {keyCode: 'BracketLeft', size: 1, upper: `{`, lower: `[`},
        {keyCode: 'BracketRight', size: 1, upper: `}`, lower: `]`},
        {keyCode: 'Backslash', size: 1.5, upper: `|`, lower: `\\`},
    ],
    [
        {keyCode: 'CapsLock_', size: 1.75},
        {keyCode: 'KeyA', size: 1, upper: `A`, lower: `a`,},
        {keyCode: 'KeyS', size: 1, upper: `S`, lower: `s`,},
        {keyCode: 'KeyD', size: 1, upper: `D`, lower: `d`,},
        {keyCode: 'KeyF', size: 1, upper: `F`, lower: `f`,},
        {keyCode: 'KeyG', size: 1, upper: `G`, lower: `g`,},
        {keyCode: 'KeyH', size: 1, upper: `H`, lower: `h`,},
        {keyCode: 'KeyJ', size: 1, upper: `J`, lower: `j`,},
        {keyCode: 'KeyK', size: 1, upper: `K`, lower: `k`,},
        {keyCode: 'KeyL', size: 1, upper: `L`, lower: `l`,},
        {keyCode: 'Semicolon', size: 1, upper: `:`, lower: `;`,},
        {keyCode: 'Quote', size: 1, upper: `"`, lower: `'`,},
        {keyCode: 'Enter', size: 2.25, center: `Enter`,},
    ],
    [
        {keyCode: 'ShiftLeft', size: 2.25, center: `Shift`},
        {keyCode: 'KeyZ', size: 1, upper: `Z`, lower: `z`},
        {keyCode: 'KeyX', size: 1, upper: `X`, lower: `x`},
        {keyCode: 'KeyC', size: 1, upper: `C`, lower: `c`},
        {keyCode: 'KeyV', size: 1, upper: `V`, lower: `v`},
        {keyCode: 'KeyB', size: 1, upper: `B`, lower: `b`},
        {keyCode: 'KeyN', size: 1, upper: `N`, lower: `n`},
        {keyCode: 'KeyM', size: 1, upper: `M`, lower: `m`},
        {keyCode: 'Comma', size: 1, upper: `<`, lower: `,`},
        {keyCode: 'Period', size: 1, upper: `>`, lower: `.`},
        {keyCode: 'Slash', size: 1, upper: `?`, lower: `/`},
        {keyCode: 'ShiftRight', size: 2.75, center: `Shift`},
    ],
    [
        {keyCode: 'ControlLeft_', size: 1.25},
        {keyCode: 'AltLeft_',size: 1.25},
        {keyCode: 'MetaLeft_', size: 1.25},
        {keyCode: 'Space', size: 6.25, center: `Space Bar`},
        {keyCode: 'Empty0_', size: 1.25},
        {keyCode: 'Empty1_', size: 1.25},
        {keyCode: 'Empty2_', size: 1.25},
        {keyCode: 'Empty3_', size: 1.25},
    ]
];