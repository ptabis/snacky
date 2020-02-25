import Entity from './Entity';

class NPC extends Entity {
    constructor(url:string, x:number, y:number) {
        super(url, x, y);
    }
}

export default NPC;