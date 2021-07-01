export default (tasks, n) => {
  // 表示最终队列的执行结果
  let q = '';
  // 对归类进行存储
  const Q = {};
  tasks.forEach(item => {
    if (Q[item]) {
      Q[item]++;
    } else {
      Q[item] = 1;
    }
  });
  while (1) {
    // 任务清单
    const keys = Object.keys(Q);
    if (!keys[0]) {
      break;
    }
    // 申明一个队列用来存储1+n任务单元
    const tmp = [];
    for (let i = 0; i <= n; i++) {
      let max = 0;
      let key, pos;
      // 找现在任务最多的任务
      keys.forEach((item, idx) => {
        if (Q[item] > max) {
          max = Q[item];
          key = item;
          pos = idx;
        }
      });
      if (key) {
        tmp.push(key); // 放一个任务
        keys.splice(pos, 1); // 1+n任务单元里不放相同的任务, 上一步放置好, 就splice
        Q[key]--; // 这个任务待放置的数量减少1
        if (Q[key] < 1) { // 这个任务没有了, 就把属性删除掉
          delete Q[key];
        }
      } else { // 不同的任务放完了, 就break, 也有可能没有放到n+1个
        break;
      }
    }
    q += tmp.join('').padEnd(n + 1, '-'); // 放置n+1个任务, 少了的, 用'-'补全
  }
  // 边界处理, 最后不需要冷却
  q = q.replace(/-+$/g, '');
  return q.length;
};
