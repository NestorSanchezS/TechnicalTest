const sumRecursive = (arrayNumbers, iter) => {
  let totalAmount = arrayNumbers.reduce(
    (sum, currentValue) => sum + currentValue
  );

  let sumNums = totalAmount
    .split("")
    .reduce((prev, curv) => Number(prev) + Number(curv));

  let newArr = sumNums.toString().split("");

  if (iter === 0) {
    return console.log(Number(sumNums));
  } else {
    return sumRecursive(newArr, iter - 1);
  }
};

const super_digit = (n, k) => {
  let workArray = [];

  let splitNums = n.toString().split("");

  for (let i = 0; i < k; i++) workArray = [...workArray, ...splitNums];

  sumRecursive(workArray, k);
};

super_digit(148, 3);
