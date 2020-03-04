import Camera from './Camera';
class Test {
    
    tab : Array<Person> = [];
    cordy() {
        var tym = document.getElementById('game')
        tym.onclick =(e) => {
            var corx: number = e.clientX
            var cory: number = e.clientY
            console.log('X:'+corx+'  Y:'+cory)

            if (corx<200 && corx > 100 && cory>400 && cory<600) {
                console.log('Super!')
            }

            for(let x = 0; x<this.tab.length; x++) {
                if (this.tab[x].xl<corx && this.tab[x].xp>corx && this.tab[x].yg<cory && this.tab[x].yd>cory) {
                    console.log('przegryw')
                }
            }

        } 
    }
    //drawimage
    create() {
        var tekst: string = 'ddhhss';
        var p1: HTMLParagraphElement = document.createElement('p');
        document.body.appendChild(p1);
        p1.innerText = tekst;
    }

    constructor() {
        this.create();
        this.cordy();
        var p1: Person =new Person(0, 0 , 100)
        var p2 =new Person(300, 300 , 100)
        var p3 =new Person(400, 400 , 100)
        
        this.tab.push(p1)
        this.tab.push(p2)
        this.tab.push(p3)
    }
}
class Person {
    xl: number
    xp: number
    yg: number
    yd: number


    constructor(x:number, y:number, bok: number) {
        this.xl = x
        this.xp = x+bok
        this.yg = y
        this.yd = y+bok
    }

    

}
export default Test;