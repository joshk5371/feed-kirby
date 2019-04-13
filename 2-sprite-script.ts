/* tslint:disable */

import {
    Sprite,
    Application,
    Rectangle,
    Graphics
} from "pixi.js";

const app: Application = new Application(800, 480);
document.body.appendChild(app.view);

let background: Sprite = Sprite.fromImage("./kirbybackground.png");
app.stage.addChild(background);

let kirby: Sprite = Sprite.fromImage("./kirby.png");
kirby.scale.x = 1;
kirby.scale.y = 1;
kirby.x = 40;
kirby.y = 240;
app.stage.addChild(kirby);

let cake: Sprite = Sprite.fromImage("./cake.png");
cake.scale.x = 1;
cake.scale.y = 1;
cake.x = 200 + Math.random() * 500;
cake.y = 50 + Math.random() * 300;
app.stage.addChild(cake);

let cake2: Sprite = Sprite.fromImage("./cake.png");
cake2.scale.x = 1;
cake2.scale.y = 1;
cake2.x = 200 + Math.random() * 500;
cake2.y = 50 + Math.random() * 300;
app.stage.addChild(cake2);

let cake3: Sprite = Sprite.fromImage("./cake.png");
cake3.scale.x = 1;
cake3.scale.y = 1;
cake3.x = 200 + Math.random() * 500;
cake3.y = 50 + Math.random() * 300;
app.stage.addChild(cake3);

// After kirby eats the cake, it should go away
// Later on, if we do the two people game thing then it should create a scoreboard

const LEFT: number = 37;
const UP: number = 38;
const RIGHT: number = 39;
const DOWN: number = 40;
const STEP: number = 5;

window.onkeydown = (e: KeyboardEvent): void => {
    if (e.keyCode === LEFT) {
        kirby.x -= STEP;
    } else if (e.keyCode === UP) {
        kirby.y -= STEP;
    } else if (e.keyCode === RIGHT) {
        kirby.x += STEP;
    } else if (e.keyCode === DOWN) {
        kirby.y += STEP;
    }
};
