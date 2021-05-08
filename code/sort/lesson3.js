export default (arr) => {
  if (arr.length < 2) return 0;
  let max = 0;
  // sort api排序
  //   arr.sort((a, b) => a - b);
  //   for (let i = 0, len = arr.length; i < len; i++) {
  //     const diff = arr[i + 1] - arr[i];
  //     if (diff > max) max = diff;
  //   }
  // 冒泡排序
  //   for (let len = arr.length - 1, i = len, tmp; i >= 0; i--) {
  //     for (let j = 0; j < i; j++) {
  //       if (arr[i] < arr[j]) {
  //         tmp = arr[j];
  //         arr[j] = arr[i];
  //         arr[i] = tmp;
  //       }
  //     }
  //     if (i < len) {
  //       const diff = arr[i + 1] - arr[i];
  //       if (diff > max) max = diff;
  //     }
  //   }
  // 选择排序
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

    if (i > 0) {
      const diff = arr[i] - arr[i - 1];
      if (diff > max) max = diff;
    }
  }
  return max;
};
