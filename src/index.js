/**
 * Converts CIE 1931 XYZ colors to CIE L*a*b*.
 * The conversion formula comes from <http://www.easyrgb.com/en/math.php>.
 *
 * @param   {number[]} color The CIE 1931 XYZ color to convert which refers to
 *                           the D65/2° standard illuminant.
 * @returns {number[]}       The color in the CIE L*a*b* color space.
 */
export default function xyzToLab([x = 0, y = 0, z = 0] = []) {
  const D65 = [95.047, 100, 108.883];
  [x, y, z] = [x, y, z].map((v, i) => {
    v = v / D65[i];
    v = v > 0.008856 ? v ** (1 / 3) : v * 7.787 + 16 / 116;

    return v;
  });

  const l = 116 * y - 16;
  const a = 500 * (x - y);
  const b = 200 * (y - z);

  return [l, a, b];
}
