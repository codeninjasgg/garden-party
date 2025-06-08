namespace SpriteKind {
    export const Plant = SpriteKind.create()
}
function setLevel (level: number) {
    switch (level) {
        case 1:
            break;
        default:
            break;
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (state == State.TitleScreen) {
        return;
    }
    if (state == State.Play) {
    	
    }
    if (tiles.tileAtLocationEquals(player.tilemapLocation(), assets.tile`myTile0`)) {
        plantSeed()
    }
})
function setTitleScreen () {
    scene.setBackgroundImage(assets.image`title_screen`)
}
function isTilemapLoactionEqual (a: Sprite, b: Sprite) {
    return a.tilemapLocation().x == b.tilemapLocation().x && a.tilemapLocation().y == b.tilemapLocation().y
}
function attachStatusBar (plant: Sprite) {
    statusbar = statusbars.create(15, 4, StatusBarKind.Health)
    statusbar.setBarBorder(1, 15)
    statusbar.setColor(7, 2)
    statusbar.value = 200
    statusbar.positionDirection(CollisionDirection.Top)
    statusbar.attachToSprite(plant)
}
function createPlayer () {
    player = sprites.create(img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f d d f f 6 f . . . 
        . . f 6 f d f d d f d f 6 f . . 
        . . f 6 f d 3 d d 3 d f 6 f . . 
        . . f 6 6 f d d d d f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f d 3 5 3 3 5 3 d f f . . 
        . . f d d f 3 5 5 3 f d d f . . 
        . . . f f 3 3 3 3 3 3 f f . . . 
        . . . f 3 3 5 3 3 5 3 3 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(player, tiles.getTileLocation(1, 1))
    controller.moveSprite(player)
    scene.cameraFollowSprite(player)
}
function plantSeed () {
    if (seedToPlant == null) {
        player.sayText("Oh no! I have no more seeds left!", 2000)
        return
    }
    let alreadyPlanted = seedsPlanted.some((plant: Sprite): boolean => {
        if (DEBUG_MODE) {
            console.log(`sprite: ${plant.tilemapLocation().x}, ${plant.tilemapLocation().y}`);
            console.log(`player: ${player.tilemapLocation().x}, ${player.tilemapLocation().y}`);
        }

        return isTilemapLoactionEqual(plant, player);
    });
if (alreadyPlanted) {
        player.sayText("Hey! We already planted here!", 2000)
        return
    }
    if (seedToPlant == "carrot") {
        plant = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 4 . . . . . . 4 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 4 . . 4 . . 4 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 4 . . . . . 4 . . . 4 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 4 . . . . 4 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Plant)
        tiles.placeOnTile(plant, player.tilemapLocation())
    } else if (seedToPlant == "apple") {
        plant = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 . . . . . . . 2 . . . 
            . . . . . . . . 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 2 . . . . . . . . . . . . . 
            . . . . . . . 2 . . . 2 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 2 . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 . . 2 . . 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Plant)
        tiles.placeOnTile(plant, player.tilemapLocation())
    } else if (seedToPlant == "eggplant") {
        plant = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . a . . . . . . . a . . . . 
            . . . . . . . a . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . a . . . 
            . . . . a . . . a . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . a . . . . 
            . . . . . . . . . . . . . . a . 
            . . . . . . . a . . . . . . . . 
            . . . a . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . a . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Plant)
        tiles.placeOnTile(plant, player.tilemapLocation())
    } else {
    	
    }
    seedsPlanted.push(plant)
}
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
let seedToPlant = ""
let plant: Sprite = null
let seed_cabbage = null
let seed_carrot = null
let player: Sprite = null
let seedsPlanted: Sprite[] = []
let CURRENT_LEVEL = 0
seedToPlant = "carrot"
namespace StatusBarKind {
    export const Growth = SpriteKind.create();
}
enum PlantState {
    planted,
    planted_watered,
    seedling,
    seedling_watered,
    ripening,
    ripening_watered,
    fruiting
}
let playerSelectSeedTexts = [
"Oh cool!",
"Finally, some",
"Acquired!",
"Aw, shucks!"
]
type PlantType = "carrot" | "eggplant" | "tomato" | "strawberry" | "apple";
function selectSeedToPlant(seed: PlantType) {
    seedToPlant = seed;
    player.say(`${playerSelectSeedTexts[Math.randomRange(0, playerSelectSeedTexts.length)]} ${seed} seeds!`)
}
let DEBUG_MODE = true
enum State {
    TitleScreen,
    Play,
    GameOver,
    EndScreen,
}
let state: State = State.Play;
scene.setBackgroundColor(7)
tiles.setCurrentTilemap(tilemap`level1`)
createPlayer()
let column = 4
for (let index = 0; index < 3; index++) {
    mySprite = sprites.create(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `, SpriteKind.Plant)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(column, 1))
    column += 1
    attachStatusBar(mySprite)
}
game.onUpdateInterval(1000, function () {
    for (let value of statusbars.allOfKind(StatusBarKind.Health)) {
        value.value += -10
    }
})
