/* tslint:disable */
/* 
   This import statement is pulling in the 
   classes we need from the pixi.js API
*/

import {
    Sprite,
    Application
} from "pixi.js";

/* 
   Here we're creating the Application object required by
   pixi.js to run our game. We can define the window size of 
   the app in the Application constructor call.
*/


let init = () => {
    const app: Application = new Application(800, 480);
    document.body.appendChild(app.view);
    let background: Sprite = Sprite.fromImage("./kirbybackground.png");
    app.stage.addChild(background);
};

init();
