// import helper functions
const { hexToRgb, rgbToHex, checkIsRgb } = require("./helperFunction");

const previsousWorkingMethodBackup = (color1, color2, ratio) => {
    const r1 = hexToRgb(color1).r;
    const g1 = hexToRgb(color1).g;
    const b1 = hexToRgb(color1).b;

    const r2 = hexToRgb(color2).r;
    const g2 = hexToRgb(color2).g;
    const b2 = hexToRgb(color2).b;

    const r = Math.floor(r1 * ratio + r2 * (1 - ratio));
    const g = Math.floor(g1 * ratio + g2 * (1 - ratio));
    const b = Math.floor(b1 * ratio + b2 * (1 - ratio));

    return rgbToHex(r, g, b);
};

// function to only mix two colors (strings)
const blendColors = (color1, color2, ratio=0.5) => {
    //check to see if we're blending an rgb color instead of hex
    if (checkIsRgb(color1)) {
        color1 = rgbToHex(color1.r, color1.g, color1.b);
    }
    if (checkIsRgb(color2)) {
        color2 = rgbToHex(color2.r, color2.g, color2.b);
    }
    // convert colors to hex
    const hex1 = color1;
    const hex2 = color2;
    // get decimal values
    const c1 = hexToRgb(hex1);
    const c2 = hexToRgb(hex2);
    // create blended color
    const c3 = {
        r: Math.floor(ratio * c1.r + (1 - ratio) * c2.r),
        g: Math.floor(ratio * c1.g + (1 - ratio) * c2.g),
        b: Math.floor(ratio * c1.b + (1 - ratio) * c2.b),
    };

    // if color is rgb, return rgb string
    if (color1.indexOf("#") === -1) {
        return c3;
    } else {
        // if color is hex, return hex string
        return rgbToHex(c3.r, c3.g, c3.b);
    }
};

// main function to mix color array
const mixColors = (colorArray, ratio=0.5) => {
    let mixedColor = colorArray[0];
    for (let i = 1; i < colorArray.length; i++) {
        mixedColor = blendColors(mixedColor, colorArray[i], ratio);
    }
    return mixedColor;
};


module.exports = {
    mixColors,
    blendColors,
};