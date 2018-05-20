import xyzToLab from ".";

test("defaults to [0, 0, 0]", () => {
  expect(xyzToLab()).toEqual([0, 0, 0]);
});

test("computes the right Lab colors", () => {
  expect(xyzToLab([0, 0, 0])).toEqual([0, 0, 0]);
  expect(
    xyzToLab([20.517540535826125, 21.586050011389926, 23.50720846240363])
  ).toEqual([53.585013452169036, 0.003155620347972121, -0.006243566036245873]);
  expect(xyzToLab([95.05, 100, 108.89999999999999])).toEqual([
    100,
    0.00526049995830391,
    -0.010408184525267927
  ]);
});
