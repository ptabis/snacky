import Camera from './Camera';
class Test {
     
    cordy() {
        var tym = document.getElementById('game')
        tym.onclick = function(e) {
            var corx: number = e.clientX
            var cory: number = e.clientY
            console.log('X:'+corx+'  Y:'+cory)
        } 
    }

    create() {
        var tekst: string = 'ddhhss';
        var p1: HTMLParagraphElement = document.createElement('p');
        document.body.appendChild(p1);
        p1.innerText = tekst;
    }

    constructor() {
        this.create();
        this.cordy();
    }
}
export default Test;