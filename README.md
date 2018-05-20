# xyz-to-lab

[![Greenkeeper badge](https://badges.greenkeeper.io/cangoektas/xyz-to-lab.svg)](https://greenkeeper.io/)

Converts CIE 1931 XYZ colors to CIE L\*a\*b\*.

<a href="https://travis-ci.com/cangoektas/xyz-to-lab"><img alt="Build status" src="https://img.shields.io/travis/cangoektas/xyz-to-lab.svg?style=flat-square"></a>
<a href="https://codecov.io/gh/cangoektas/xyz-to-lab"><img alt="Code coverage" src="https://img.shields.io/codecov/c/github/cangoektas/xyz-to-lab.svg?style=flat-square"></a>
<a href="https://unpkg.com/xyz-to-lab/lib/"><img alt="Build size" src="http://img.badgesize.io/https://unpkg.com/xyz-to-lab/lib/xyz-to-lab.min.js?label=size&style=flat-square"></a>
<a href="https://unpkg.com/xyz-to-lab/lib/"><img alt="Build size gzipped" src="http://img.badgesize.io/https://unpkg.com/xyz-to-lab/lib/xyz-to-lab.min.js?compression=gzip&label=gzip%20size&style=flat-square"></a>
<a href="https://www.npmjs.com/package/xyz-to-lab"><img alt="npm version" src="https://img.shields.io/npm/v/xyz-to-lab.svg?style=flat-square"></a>

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
