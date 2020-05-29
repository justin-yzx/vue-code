# vue源码学习笔记
## 第一章 数据监听
### observer目录 根据vue源码拆分出的模拟练习
Observer ---> Dep ---> Watcher
- Data通过observer转换成了getter/setter的形式来追踪变化。
- 当外界通过Watcher读取数据时，会触发getter从而将Watcher添加到依赖中。
- 当数据发生了变化时，会触发setter，从而向Dep中的依赖（即Watcher）发送通知。
- Watcher接收到通知后，会向外界发送通知，变化通知到外界后可能会触发视图更新，也有可能触发用户的某个回调函数等。
