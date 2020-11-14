class Camera {
    canvasElement:HTMLCanvasElement;
    canvasContext:CanvasRenderingContext2D;
    height:number;
    width: number;

    constructor() {
        this.getCanvasElement();
        this.getScreenResolution();
        this.setCanvasElementResolution();
        this.getCanvasContext();

        window.onresize= () => {
            this.getScreenResolution();
            this.canvasElement.width = this.width;
            this.canvasElement.height = this.height;
        };
        this.mainLoop();
    }

    getCanvasElement() {
        this.canvasElement = document.querySelector("#game");
    }
    getCanvasContext() {
        this.canvasContext = this.canvasElement.getContext("2d"); 
    }
    getScreenResolution() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }
    setCanvasElementResolution() {
        this.canvasElement.width = this.width;
        this.canvasElement.height = this.height;
    }
    update() {

    }
    draw() {
        
    }
    //dirty hack to not forgetting context
    mainLoop = () => {
        this.update();
        this.draw();
        requestAnimationFrame(this.mainLoop);
    }
}

export default Camera;