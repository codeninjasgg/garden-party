namespace SpriteKind {
    export const Plant = SpriteKind.create()
    export const Water = SpriteKind.create()
}
namespace StatusBarKind {
    export const Growth = StatusBarKind.create()
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Plant, function (sprite, otherSprite) {
    // to water
    if (controller.B.isPressed()) {
        mySprite = sprites.create(assets.image`water`, SpriteKind.Water)
        tiles.placeOnTile(mySprite, otherSprite.tilemapLocation())
        attachStatusBar(otherSprite)
    }
})
statusbars.onZero(StatusBarKind.Growth, function (status) {
    if (status.spriteAttachedTo().image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `), CustomAssets.carrotSeed) {
        status.spriteAttachedTo().sayText("Seedling!")
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
function isTilemapLoactionEqual (a: Sprite, b: Sprite) {
    return a.tilemapLocation().x == b.tilemapLocation().x && a.tilemapLocation().y == b.tilemapLocation().y
}
function attachStatusBar (plant: Sprite) {
    statusbar = statusbars.create(15, 4, StatusBarKind.Growth)
    statusbar.setBarBorder(1, 15)
    statusbar.setColor(7, 2)
    statusbar.value = 100
    statusbar.positionDirection(CollisionDirection.Top)
    statusbar.attachToSprite(plant)
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
}
function createPlayer () {
    player = sprites.create(CustomAssets.playerFemale, SpriteKind.Player)
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
        plant = sprites.create(CustomAssets.carrotSeed, SpriteKind.Plant)
        tiles.placeOnTile(plant, player.tilemapLocation())
    } else if (seedToPlant == "apple") {
        plant = sprites.create(CustomAssets.appleSeed, SpriteKind.Plant)
        tiles.placeOnTile(plant, player.tilemapLocation())
    } else if (seedToPlant == "eggplant") {
        plant = sprites.create(CustomAssets.eggplantSeed, SpriteKind.Plant)
        tiles.placeOnTile(plant, player.tilemapLocation())
    } else {
    	
    }
    seedsPlanted.push(plant)
}
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
let CURRENT_LEVEL = 0
let seedsPlanted: Sprite[] = []
let player: Sprite = null
let seed_carrot = 0
let seed_cabbage = null
let plant: Sprite = null
let seedToPlant = ""
namespace CustomAssets {
    export const playerFemale = img`
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
        `;
    export const carrotSeed = img`
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
            `;
    export const eggplantSeed = img`
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
    `;
    export const appleSeed = img`
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
            `;
}
seedToPlant = "carrot"
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
game.onUpdateInterval(1000, function () {
    if (statusbars.allOfKind(StatusBarKind.Growth).length > 0) {
        for (let value of statusbars.allOfKind(StatusBarKind.Growth)) {
            value.value += -10
        }
    }
})
