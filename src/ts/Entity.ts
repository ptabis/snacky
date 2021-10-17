class Entity {
    x:number;
    y:number;
    url:string;

    constructor(url:string = "", x:number = 0, y:number = 0) {
        this.url = url;
        this.x = x;
        this.y = y;
    }
}

export default Entity;