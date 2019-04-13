/* tslint:disable */

import {
    Sprite,
    Container,
    Application,
    Rectangle,
    Graphics,
    DisplayObject,
    Text
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
cake.x = 200 + Math.random() * 190;
cake.y = 50 + Math.random() * 300;
app.stage.addChild(cake);

let cake2: Sprite = Sprite.fromImage("./cake.png");
cake2.scale.x = 1;
cake2.scale.y = 1;
cake2.x = 390 + Math.random() * 190;
cake2.y = 50 + Math.random() * 300;
app.stage.addChild(cake2);

let cake3: Sprite = Sprite.fromImage("./cake.png");
cake3.scale.x = 1;
cake3.scale.y = 1;
cake3.x = 580 + Math.random() * 190;
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

/* Let's add some enemies!
   We create a class for our enemies since there are multiple instances 
   of them doing the same thing, then we add them to the app with a for-loop.
*/

class Blob {
    sprite: Sprite;
    direction: number = 1;
    constructor(sprite: Sprite) {
        this.sprite = sprite;
    }
}

let enemies: Blob[] = [];
for (let i: number = 1; i <= 4; i++) {
    let sprite: Sprite = Sprite.fromImage("./waddledee.png");
    sprite.scale.x = 2;
    sprite.scale.y = 2;
    sprite.x = 700 / 4 * i - 20;
    sprite.y = 240;
    let blob: Blob = new Blob(sprite);
    enemies[enemies.length] = blob;
    app.stage.addChild(blob.sprite);
}

/* The collisions are checked by comparing two DisplayObjects 
   and testing if their bounds are intersecting.
*/

let isColliding = (a: DisplayObject, b: DisplayObject): boolean => {
    const ab: Rectangle = a.getBounds();
    const bb: Rectangle = b.getBounds();
    return ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;
};

let resetKirby = (): void => {
    kirby.x = 40;
    kirby.y = 240;
};

let resetCake = (): void => {
    cake.x = 200 + Math.random() * 190;
    cake.y = 50 + Math.random() * 300;
    app.stage.addChild(cake);
};

let resetCake2 = (): void => {
    cake2.x = 390 + Math.random() * 190;
    cake2.y = 50 + Math.random() * 300;
    app.stage.addChild(cake2);
};

let resetCake3 = (): void => {
    cake3.x =  580 + Math.random() * 190;
    cake3.y = 50 + Math.random() * 300;
    app.stage.addChild(cake3);
};


app.ticker.add((delta: number): void => {
    for (let i: number = 0; i < enemies.length; i++) {
        //   Let's have the enemies move.
        
          const blob: Blob = enemies[i];
          blob.sprite.y += 5 * blob.direction;
        // random direction change
          if (Math.random() < 0.01) { // 1% chance every tick
            blob.direction *= -1;
          }
        // don't go out of bounds
          if (blob.sprite.y <= 0) {
            blob.direction = 1;
            blob.sprite.y = 1;
          } else if (blob.sprite.y >= 460) {
            blob.direction = -1;
            blob.sprite.y = 459;
          }
        
        //   This tests if the enemies are colliding with the protagonist.
        


          if (isColliding(kirby, cake)) {
            app.stage.removeChild(cake);
          }

          if (isColliding(kirby, cake2)) {
            app.stage.removeChild(cake2);
          }

          if (isColliding(kirby, cake3)) {
            app.stage.removeChild(cake3);
          }

          if (isColliding(kirby, blob.sprite)) {
            resetKirby();
            resetCake();
            resetCake2();
            resetCake3();
          }
    }
});
