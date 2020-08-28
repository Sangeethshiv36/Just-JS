const isArmstrong = (number) => {
  let sum = 0;
  const numArr = number.toString().split('');
  numArr.forEach((num) => {
    const cubeRes = Math.pow(parseInt(num), numArr.length);
    sum += cubeRes;
  });
  if (sum === number) {
    return `${number} is an Armstrong number`;
  }
  return `${number} is not an Armstrong number`;
};

console.log(isArmstrong(54748));
