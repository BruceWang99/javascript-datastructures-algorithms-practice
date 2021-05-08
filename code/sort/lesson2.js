export default (arr, k) => {
  // sort api
  //   return arr.sort((a, b) => b - a)[k - 1];
  // 冒泡排序;
  for (let len = arr.length - 1, i = len, tmp; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
    if (k === i + 1) break;
  }
  // 选择排序
  //   for (let len = arr.length, i = 0, max; i <= len - k; i++) {
  //     max = arr[i];
  //     for (let j = i, tmp; j < len; j++) {
  //       if (arr[j] > max) {
  //         tmp = max;
  //         max = arr[j];
  //         arr[j] = tmp;
  //       }
  //     }
  //     arr[i] = max;
  //   }
  return arr[k - 1];
};
