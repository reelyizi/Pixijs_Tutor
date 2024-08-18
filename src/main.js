import { Application, Assets, Sprite } from 'pixi.js';

// Asynchronous IIFE
(async () =>
{
    // Create a PixiJS application with the desired options.
    const app = new Application({ backgroundColor: 0x1099bb, resizeTo: window });

    // Then adding the application's canvas to the DOM body.
    document.body.appendChild(app.view);

    // Load the bunny texture.
    const texture = await Assets.load('https://pixijs.com/assets/bunny.png');

    // Create a new Sprite from an image path.
    const bunny = new Sprite(texture);

    // Add to stage.
    app.stage.addChild(bunny);

    // Center the sprite's anchor point.
    bunny.anchor.set(0.5);

    // Move the sprite to the center of the screen.
    bunny.x = app.screen.width / 2;
    bunny.y = app.screen.height / 2;
})();
