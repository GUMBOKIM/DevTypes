export const checkPressKeyKind = (key: string) => {
    return {
        isCharacterKey: /^[a-zA-Z{}[\]/?.,;:|)*~`!^\-_+<>@#$%&\\=('"]$/g.test(key),
        isModifyKey: ['Shift', 'Control', 'Tab'].includes(key),
        isRemoveKey: ['Delete', 'Backspace'].includes(key),
        isEnterKey: key === 'Enter',
        isSpaceKey: key === ' '
    }
}