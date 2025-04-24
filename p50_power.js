var myPow = function (x, n) {
  let num = Math.abs(n);
  let result = 1.0;

  while (num != 0) {
    if (num % 2 === 1) {
      result = result * x;
      num = num - 1;
    }
    x = x * x;
    num = Math.floor(num / 2);
  }
  return n < 0 ? 1.0 / result : result;
};

myPow(2, 56);
