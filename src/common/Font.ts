type FontSizeKey = "Text-xl" | "Text-l" | "Text-m" | "Text-s";
type FontSizeType = { [key in FontSizeKey]: { fontSize: string;}; };

const FontSize: FontSizeType = {
    "Text-xl": {fontSize: "20px"},
    "Text-l": {fontSize: "16px"},
    "Text-m": {fontSize: "14px"},
    "Text-s": {fontSize: "13px"},
}

type FontBoldKey = "Bold" | "Medium" | "Regular";
type FontBoldType = { [key in FontBoldKey]: { fontWeight: number; }; };

const FontBold: FontBoldType = {
    "Bold": {fontWeight: 700},
    "Medium": {fontWeight: 500},
    "Regular": {fontWeight: 400},
}

export const Font = (size: FontSizeKey, bold: FontBoldKey) => {
    return `
        font-weight: ${FontBold[bold].fontWeight};
        font-size: ${FontSize[size].fontSize};
        `
}
