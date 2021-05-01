const { calculateMiles } = require("./calculateDist.js");

test("location is 50 miles within london", () => {
  expect(calculateMiles(51.6553959, 0.0572553)).toBeLessThanOrEqual(50);
  expect(calculateMiles(51.6710832, 0.8078532)).toBeLessThanOrEqual(50);
  expect(calculateMiles(51.5489435, 0.3860497)).toBeLessThanOrEqual(50);
  expect(calculateMiles(47.3879065, 19.1150392)).toBeGreaterThanOrEqual(50);
  expect(calculateMiles(34.003135, -117.7228641)).toBeGreaterThanOrEqual(50);
});
