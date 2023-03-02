const super_digit = require("./superdigit");

test("if n and k result in 3", () => {
  expect(super_digit(148, 3)).toBe(3);
});

test("if we have 2 as a result od n and k", () => {
  expect(super_digit(94, 5)).toBe(2);
});

test("6 as a result of the parameters n and k", () => {
  expect(super_digit(255, 5)).toBe(6);
});

test("if n and k result in 3", () => {
  expect(super_digit(1, 3)).toBe(3);
});
test("n and k shows value of 8", () => {
  expect(super_digit(134567, 1)).toBe(8);
});

test("n and value of k we discover as a result 9", () => {
  expect(super_digit(14, 333)).toBe(9);
});

test("3 as a result of n and k", () => {
  expect(super_digit(56788765, 3)).toBe(3);
});

// test("if n and k result in 0", () => {
//   expect(super_digit(000, 3)).toBe(0);
// });

// const testSuperDigit = () => {
//   const result = super_digit(148, 3);
//   if (result == 3) {
//     console.log("Test successful");
//   } else {
//     console.log("Test failed");
//   }
// };

// testSuperDigit();
