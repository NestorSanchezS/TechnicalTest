const super_digit = require("./superdigit");

let n = process.argv[2];
let k = process.argv[3];

if (n == undefined) {
  n = 148;
}
if (k == undefined) {
  k = 3;
}
const result = super_digit(n, k);
console.log(result);
