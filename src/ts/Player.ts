import Entity from './Entity';

class Player extends Entity {
    constructor(url:string, x:number, y:number) {
        super(url, x, y);
    }
}

export default Player;