const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) + 100

// Make stage
let app = new PIXI.Application({
    width: vw,
    height: 570,
    backgroundAlpha: 0
});

// add stage to docuemnt body
document.body.appendChild(app.view);

// make line
const graphics = new PIXI.Graphics();

graphics.beginFill(0x5F5149);
graphics.drawRect(50, 50, vw, 15);
graphics.endFill();

graphics.x = -90

// add line to the stage
app.stage.addChild(graphics);

// make the mood note into a sprite and display it in the stage

function createMoodNote() {
    const sprite = PIXI.Sprite.from('/images/moodNote.svg');

    sprite.position.set(200, 170);

    sprite.interactive = true;

    sprite.buttonMode = true;
    sprite.anchor.set(0.5);
    sprite.scale.set(0.6);

    //default position of the sprites

    sprite
        .on('pointerdown', onClick);

    /*{
        app.ticker.add(() => {
            sprite.y += 5
        })
    }*/
    
    app.stage.addChild(sprite);
}

createMoodNote()

function createTaskNote() {
    let taskSprite = PIXI.Sprite.from('/images/dishNote.svg');

    taskSprite.interactive = true;

    taskSprite.buttonMode = true;
    taskSprite.anchor.set(0.5);
    taskSprite.scale.set(0.6);

    taskSprite.y = 170;
    taskSprite.x = 500;

    taskSprite
        .on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd)
        .on('pointerupoutside', onDragEnd)
        .on('pointermove', onDragMove)
        .on('pointerdown', onClicked);

    app.stage.addChild(taskSprite);
}

function onDragStart(event) {
    // store a reference to the data
    // the reason for this is because of multitouch
    // we want to track the movement of this particular touch
    this.data = event.data;
    this.dragging = true;
}

function onDragEnd() {
    this.dragging = false;
    // set the interaction data to null
    this.data = null;
}

function onDragMove() {
    if (this.dragging) {
        const newPosition = this.data.getLocalPosition(this.parent);
        this.x = newPosition.x;
    }
}

function onClick() {
    window.location.replace("/pages/emotional.html");
}

function onClicked() {
    window.location.replace("/pages/confirm.html");
}

createTaskNote()