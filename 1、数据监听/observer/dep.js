import Watcher from "./watcher.js";
//依赖收集队列
export default class Dep{
    constructor() {
        this.subs = [];
    }

    // 添加一个依赖
    depend (key) {
        //target在Watcher中定义
        new Watcher(key);
        if (window.target) {
            this.addSub(window.target)
        }
    }

    addSub (sub) {
        this.subs.push(sub)
    }


    // 通知所有依赖更新
    notify (val) {
        //深拷贝依赖数组
        const subs = this.subs.slice()
        for (let i = 0, l = subs.length; i < l; i++) {
            //update方法在Watcher中
            subs[i].update(val)
        }
    }

}
