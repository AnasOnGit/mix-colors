# Mix colors

Mix two colors/array of colors together and get mixed colored or average of both colors.

# RGB and HEX support?

Yes, it can convert both Hex and RGB colors.

## Installation

```bash
npm install mix-colors-palette
```

## Hex Usage

```javascript
import { mixColors, blendColors } from "mix-colors-palette";

// mix colors array
// mixColors([c1,c2,...],ratio) // default ration 0.5 - min 0 - max 1
mixColors(["#000000", "#ffffff", "#ff0000"], 0.5); // return #bf3f3f

// mix two colors only
// blendColors(color1,color2,ratio) // default ration 0.5 - min 0 - max 1
blendColors("#000000", "#FFFFFF", 0.5); // returns #7F7F7F
```

## RGB Usage

```javascript
import { mixColors, blendColors } from "mix-colors-palette";

// mix colors array
// mixColors([c1,c2,...],ratio) // default ration 0.5 - min 0 - max 1
mixColors(
  [
    { r: 0, g: 0, b: 0 },
    { r: 255, g: 255, b: 255 },
  ],
  0.5
); // return #7f7f7f

// mix two colors only
// blendColors(color1,color2,ratio) // default ration 0.5 - min 0 - max 1
blendColors({ r: 0, g: 0, b: 0 }, { r: 255, g: 255, b: 255 }, 0.5); // returns #7F7F7F
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
