class Heap {
  constructor(str) {
    const map = new Map();
    str.split('').forEach(item => {
      if (map.has(item)) {
        map.set(item, map.get(item) + 1);
      } else {
        map.set(item, 1);
      }
    });
    this.map = map;
    this.data = Array.from(map.values());
  }
  toString () {
    const arr = this.sort();
    const str = [];
    while (arr.length) {
      const top = arr.pop();
      for (const [k, v] of this.map) {
        if (v === top) {
          str.push(k.repeat(v));
          this.map.delete(k);
          break;
        }
      }
    }
    return str.join('');
  }
  sort () {
    const iArr = this.data;
    const n = iArr.length;
    if (n <= 1) {
      return iArr;
    } else {
      // 从最后一个父节点向上遍历, 构建最大堆
      for (let i = Math.floor(n / 2); i >= 0; i--) {
        Heap.maxHeapify(iArr, i, n);
      }
      // 遍历n次, 每一次找一个最大值放到数组的最后
      for (let j = 0; j < n; j++) {
        Heap.swap(iArr, 0, n - 1 - j);
        // 从上到下构建最大堆
        Heap.maxHeapify(iArr, 0, n - 1 - j - 1);
      }
      return iArr;
    }
  }
  // 交换两个元素
  static swap(arr, a, b) {
    if (a === b) {
      return;
    }
    const c = arr[a];
    arr[a] = arr[b];
    arr[b] = c;
  }
  /**
   * @static 构建最大堆的过程
   * @param {*} Arr // 原数组
   * @param {*} i // 索引
   * @param {*} size // 最大限度
   * @memberof Heap
   */
  static maxHeapify(Arr, i, size) {
    // 左节点(索引)
    const l = i * 2 + 1;
    // 右节点(索引)
    const r = i * 2 + 2;
    let largest = i; // 标记最大的节点(索引)
    if (l <= size && Arr[l] > Arr[largest]) { // 比较左节点
      largest = l;
    }
    if (r <= size && Arr[r] > Arr[largest]) { // 比较右节点
      largest = r;
    }
    if (largest !== i) {
      // 交换最大值
      Heap.swap(Arr, i, largest);
      // 指定节点交换后, 可能影响子节点, 做一次递归
      Heap.maxHeapify(Arr, largest, size);
    }
  }
}
export default Heap;
