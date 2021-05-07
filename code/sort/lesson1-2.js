// 选择排序
export default (arr) => {
  for (let len = arr.length, i = 0, min, index; i < len; i++) {
    min = arr[i];
    index = i;
    for (let j = i + 1; j < len; j++) {
      if (min > arr[j]) {
        min = arr[j];
        index = j;
      }
    }
    arr[index] = arr[i];
    arr[i] = min;
  }
  return arr;
};
