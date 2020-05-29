import Dep from "./dep.js";

//Observer为数据监听
export default class Observer {
    constructor(value) {
        this.value = value

        if(Array.isArray(value)){
            //如果是array，另行处理
        }else {
            this.walk(value)
        }
    }

    walk(obj){
        const keys = Object.keys(obj)

        for(let i=0;i<keys.length;i++){
            defineReactive(obj,keys[i]);
        }
    }

}

function defineReactive(obj,key,val){
    if(arguments.length === 2){
        val = obj[key];
    }

    if(typeof val === 'object'){
        new Observer(val)
    }

    const dep = new Dep()

    Object.defineProperty(obj,key,{
        enumerable: true,
        configurable: true,
        get() {
            console.log(`${key}-get`)
            // 在getter中收集依赖
            dep.depend(key)
            return val
        },
        set(v) {
            console.log(`${key}-set`)
            if(v === val){
                return
            }
            val = v;
            // 在setter中通知依赖更新
            dep.notify(val)
        }
    })
}
