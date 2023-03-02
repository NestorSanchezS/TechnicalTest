const sumRecursive = (arrayNumbers) => {
  arrayNumbers = arrayNumbers.map((n) => Number.parseInt(n));

  if (arrayNumbers.length == 1) {
    return arrayNumbers[0];
  }

  let totalAmount = arrayNumbers.reduce(
    (sum, currentValue) => sum + currentValue
  );

  let sumNums = totalAmount.toString().split("");

  return sumRecursive(sumNums);
};

const super_digit = (n, k) => {
  let workArray = [];

  let splitNums = n.toString().split("");

  for (let i = 0; i < k; i++) workArray = [...workArray, ...splitNums];

  const result = sumRecursive(workArray);

  return result;
};

module.exports = super_digit;
