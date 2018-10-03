module.exports = function longestConsecutiveLength(array) {
  
  array.sort((a, b) => {
    return a - b;
  });

  array = array.filter((el, i, tempArray) => {
    if (el === tempArray[i + 1]) {
      return 0;
    } else {
      return 1;
    }
  });

  var count = 0;
  if (array.length) {
    count = 1;
  }
  var arr = [count];

  array.forEach((el, i, tempArray) => {
    if (tempArray[i + 1] - el !== 1) {
      arr.push(count);
      count = 1;
    } else {
      count++;
    }
  });

  function getLongestConsecutive(arrayNumber) {
    return Math.max.apply(null, arrayNumber);
  }

  return getLongestConsecutive(arr);
}
