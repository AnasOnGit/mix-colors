// helper Functions

// convert hex color to rgb color format
const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ?
        {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        } :
        null;
};

// convert rgb color to hex color
const rgbToHex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
// verify if color is rgb
const checkIsRgb = (color) => {
    return color.r !== undefined;
};

// export helper functions
module.exports = {
    hexToRgb,
    rgbToHex,
    checkIsRgb,
};