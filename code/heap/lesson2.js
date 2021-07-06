class Heap {
  constructor(arr) {
    this.data = arr;
    this.max = arr.length;
    this.sort();
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
  find (val, i = 0) {
    const arr = this.data;
    if (val > arr[i] || i > this.max) {
      return false;
    } else if (val === arr[i]) {
      return val;
    } else {
      return this.find(val, i * 2 + 1) || this.find(val, i * 2 + 2);
    }
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
class Ugly {
  constructor(n, primes) {
    this.n = n;
    this.primes = new Heap(primes);
  }
  getAll () {
    // 超级丑数列表
    const res = [1];
    let i = 2;
    const primes = this.primes;
    // 找超级丑数
    while (res.length < this.n) {
      const arr = Ugly.getPrimes(i);
      let k = 0;
      const l = arr.length;
      for (;k < l; k++) {
        // 只要找到一个不属于primes里的质因数, 就返回
        if (!primes.find(arr[k])) {
          break;
        }
      }
      // k 等于 l 有两种情况, 1、没有质因数2、所有质因数都在列表中
      if (k === l) {
        if (l === 0) {
          if (primes.find(i)) {
            res.push(i);
          }
        } else {
          res.push(i);
        }
      }
      i++;
    }
    return res[this.n - 1];
  }
  // 计算指定正整数的质因数
  static getPrimes (n) {
    const prime = (n) => {
      // 存储所有的质因数
      const arr = [];
      // 从2开始到 n的二分之一的每个数做遍历, 来筛选质因数
      for (let i = 2; i < n / 2 + 1; i++) {
        // 没有余数 i就是因数, 递归里面返回没有长度, 说明只能被 0 和 本身整除是质数
        if (n % i === 0 && !prime(i).length) {
          arr.push(i);
        }
      }
      return arr;
    };
    return prime(n);
  }
}
// TODO 执行效率太低了, 通不过
export default Ugly;

export {
  Heap
};
