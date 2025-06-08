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
    player = sprites.create(assets.image`player_female`, SpriteKind.Player)
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
        plant = sprites.create(assets.image`seed_carrot`, SpriteKind.Plant)
        tiles.placeOnTile(plant, player.tilemapLocation())
    } else if (seedToPlant == "apple") {
        plant = sprites.create(assets.image`seed_tomato`, SpriteKind.Plant)
        tiles.placeOnTile(plant, player.tilemapLocation())
    } else if (seedToPlant == "eggplant") {
        plant = sprites.create(assets.image`seed_crab_apple`, SpriteKind.Plant)
        tiles.placeOnTile(plant, player.tilemapLocation())
    } else {
    	
    }
    seedsPlanted.push(plant)
}
let mySprite: Sprite = null
let statusbar: StatusBarSprite = null
let plant: Sprite = null
let seed_cabbage = null
let seed_carrot = null
let player: Sprite = null
let seedsPlanted: Sprite[] = []
let CURRENT_LEVEL = 0
let seedToPlant: PlantType = null
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
class Plant {
    statusbar: StatusBarSprite = null;
    type: PlantType = null;
    sprite: Sprite = null;
    state: PlantState = null;

    constructor(plantType: PlantType) {
        this.type = plantType;
        this.createSprite();
    }

    private attachTimerStatusBar() {
        this.statusbar = statusbars.create(15, 4, StatusBarKind.Growth);
        this.statusbar.setBarBorder(1, 15);
        this.statusbar.setColor(7, 2);
        this.statusbar.value = 10;
        this.statusbar.positionDirection(CollisionDirection.Top);
        this.statusbar.attachToSprite(plant);
    }

    private setTimerValue(time: number) {
        this.statusbar.value = time;
    }

    private createSprite() {
        if (seedToPlant == "carrot") {
            this.sprite = sprites.create(assets.image`seed_carrot`, SpriteKind.Plant)
        } else if (seedToPlant == "apple") {
            this.sprite = sprites.create(assets.image`seed_tomato`, SpriteKind.Plant)
        } else if (seedToPlant == "eggplant") {
            this.sprite = sprites.create(assets.image`seed_crab_apple`, SpriteKind.Plant)
        }
        if (this.sprite) {
            tiles.placeOnTile(this.sprite, player.tilemapLocation())
        }
    }

    public water() {
        switch (this.state) {
            case PlantState.planted:
                this.state = PlantState.planted_watered;
            case PlantState.seedling:
                this.state = PlantState.seedling_watered;
            case PlantState.ripening:
                this.state = PlantState.ripening_watered;
            case PlantState.fruiting:
                this.state = PlantState.fruiting;
            default:
                break;
        }
    }

    public grow() {
        // whenever the plant is watered, grow the plant
    }
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
    mySprite = sprites.create(assets.image`strawberry`, SpriteKind.Plant)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(column, 1))
    column += 1
    attachStatusBar(mySprite)
}
game.onUpdateInterval(1000, function () {
    for (let value of statusbars.allOfKind(StatusBarKind.Health)) {
        value.value += -10
    }
})
