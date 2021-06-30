export default class MyCircularQueue {
  constructor (k) {
    // 保存数据长度为k的数据结构
    this.list = Array(k);
    // 队首指针
    this.front = 0;
    // 队尾指针
    this.rear = 0;
    // 队列长度
    this.max = k;
  }
  enQueue(num) {
    if (this.isFull()) {
      return false;
    } else {
      this.list[this.rear] = num;
      this.rear = (this.rear + 1) % this.max; // 队尾指针循环
      return true;
    }
  }
  deQueue() {
    const v = this.list[this.front];
    this.list[this.front] = '';
    this.front = (this.front + 1) % this.max; // 队首指针循环
    return v;
  }
  isEmpty() {
    return this.front === this.rear && !this.list[this.front];
  }
  isFull() {
    return this.front === this.rear && !!this.list[this.front]; // null undefined ''
  }
  Front() {
    return this.list[this.front];
  }
  Rear() {
    const rear = this.rear - 1;
    return this.list[rear < 0 ? this.max - 1 : rear];
  }
}
