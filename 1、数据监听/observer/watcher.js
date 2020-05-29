//依赖
export default class Watcher {
    constructor (key) {
        this.key = key;
        this.get()
    }
    get () {
        window.target = this;
        return
    }
    update (val) {
        console.log('watch-通知')
        let arr = document.getElementsByClassName(`${this.key}get`)
        for(let i=0;i<arr.length;i++){
            if(arr[i].tagName === 'INPUT'){
                arr[i].value = val
            }else {
                arr[i].innerHTML =val
            }
        }
    }
}
