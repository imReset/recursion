function fibs(num) {
  let result = [];

  for (let i = 0; i < num; i++) {
    if (i < 2) {
      result.push(i);
    } else {
      result.push(result[i - 1] + result[i - 2]);
    }
  }

  return result;
}

fibs(12);
