const sl = require("./index.js");

test("테스트 진행하겠습니다.", () => {
  expect(sl([[9], [5, 12, 7, 10, 9, 1, 2, 3, 11], [13]])).toBe(3);
});
