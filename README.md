# xyz-to-lab

Converts CIE 1931 XYZ colors to CIE L\*a\*b\*.

## Installation

```sh
npm install --save xyz-to-lab
# or
yarn add xyz-to-lab
```

## Usage

```js
import xyzToLab from "xyz-to-lab";

xyzToLab([77, 92.78, 13.85]); // [97.13824698129729, -21.555908334832285, 94.48248544644461]
```

You can also use UMD builds from unpkg:

```html
<script src="https://unpkg.com/xyz-to-lab/lib/xyz-to-lab.js"></script>
<script src="https://unpkg.com/xyz-to-lab/lib/xyz-to-lab.min.js"></script>
```

## License

MIT
