export const CHARACTER_STATUS = {
    EMPTY: 'empty',
    MATCH: 'match',
    MISMATCH: 'mismatch',
    NOW: 'now'
}
// eslint-disable-next-line
export type CHARACTER_STATUS = typeof CHARACTER_STATUS[keyof typeof CHARACTER_STATUS];

export const CONVERT_TYPE = {
    NORMAL: 'normal',
    CODE: 'code',
}
// eslint-disable-next-line
export type CONVERT_TYPE = typeof CONVERT_TYPE[keyof typeof CONVERT_TYPE];