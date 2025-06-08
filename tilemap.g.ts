// Auto-generated code. Do not edit.
namespace myImages {

    helpers._registerFactory("image", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "myTiles.transparency16":return img`
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
`;
            case "myTiles.tile1":
            case "myTile":return img`
f 8 8 8 6 7 7 7 7 7 7 7 7 7 7 6 
e e e 8 7 7 7 6 7 7 7 7 7 7 7 6 
e e 6 6 6 6 6 7 7 7 7 7 7 7 7 6 
e e e 6 6 7 7 7 7 7 7 7 7 7 7 6 
e e e 8 6 6 7 7 7 7 7 7 7 7 7 6 
f e 8 6 6 6 6 7 7 7 7 7 7 7 6 6 
8 6 6 6 7 7 7 6 7 7 7 7 7 6 6 6 
e e 6 6 6 7 7 7 7 7 7 7 7 7 6 6 
e 8 8 8 6 6 7 7 7 7 7 7 7 7 7 6 
8 8 8 6 6 6 6 7 7 7 7 7 7 7 7 6 
e e 6 6 6 6 7 7 7 7 7 7 7 7 7 6 
e e 8 6 6 7 7 7 7 7 7 7 7 7 7 6 
e 8 8 8 8 6 6 6 7 7 7 7 7 7 7 6 
e e 8 8 6 6 7 7 7 7 7 7 7 7 6 6 
e e e 6 6 6 6 7 7 7 7 7 7 6 6 6 
f f 8 6 6 6 7 7 7 7 7 7 7 7 6 6 
`;
            case "myTiles.tile3":
            case "myTile1":return img`
6 6 7 7 7 7 7 7 7 7 6 6 6 8 f f 
6 6 6 7 7 7 7 7 7 6 6 6 6 e e e 
6 6 7 7 7 7 7 7 7 7 6 6 8 8 e e 
6 7 7 7 7 7 7 7 6 6 6 8 8 8 8 e 
6 7 7 7 7 7 7 7 7 7 7 6 6 8 e e 
6 7 7 7 7 7 7 7 7 7 6 6 6 6 e e 
6 7 7 7 7 7 7 7 7 6 6 6 6 8 8 8 
6 7 7 7 7 7 7 7 7 7 6 6 8 8 8 e 
6 6 7 7 7 7 7 7 7 7 7 6 6 6 e e 
6 6 6 7 7 7 7 7 6 7 7 7 6 6 6 8 
6 6 7 7 7 7 7 7 7 6 6 6 6 8 e f 
6 7 7 7 7 7 7 7 7 7 6 6 8 e e e 
6 7 7 7 7 7 7 7 7 7 7 6 6 e e e 
6 7 7 7 7 7 7 7 7 6 6 6 6 6 e e 
6 7 7 7 7 7 7 7 6 7 7 7 8 e e e 
6 7 7 7 7 7 7 7 7 7 7 6 8 8 8 f 
`;
            case "myTiles.tile2":
            case "myTile0":return img`
. . . . . . . . . . . . . . . . 
. . e e e e e e e e e e e e . . 
. e e e e e e e e b e e e e e . 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e b e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e c e e 
e e e e e e e e e e e e e e e e 
e e e e c e e e e e e e e e e e 
. e e e e e e e e e e e e e e e 
. e e e e e e e e e e e e e e e 
. . . e e e e e e e e e e e e . 
. . . . . . . . . . . . . . . . 
`;
        }
        return null;
    })

    helpers._registerFactory("animation", function(name: string) {
        switch(helpers.stringTrim(name)) {

        }
        return null;
    })

    helpers._registerFactory("song", function(name: string) {
        switch(helpers.stringTrim(name)) {

        }
        return null;
    })

}
// Auto-generated code. Do not edit.

// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`24001400010101010101030303030303010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101020202010102020201010202020101020202010101010101010101010101010101010101020202010102020201010202020101020202010101010101010101010101010101010101020202010102020201010202020101020202010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
`, [myTiles.transparency16,sprites.castle.tileGrass1,myTiles.tile2,sprites.castle.tileGrass3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return myTiles.transparency16;
            case "myTile":
            case "tile1":return myTiles.tile1;
            case "myTile1":
            case "tile3":return myTiles.tile3;
            case "myTile0":
            case "tile2":return myTiles.tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
