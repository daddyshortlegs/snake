import { Coordinate } from "./coordinate";

export function Rat(maxX: number = 3, maxY: number = 3) {
    let ratPosition: Coordinate = {x: 0, y: 0};
    
    function placeRandomly() {
        placeRat({
            x: getRandomInt(maxX),
            y: getRandomInt(maxY)
        });
    }

    function placeRat(position: Coordinate) {
        ratPosition = position;
    }

    function getRandomInt(max: number): number {
        return Math.floor(Math.random() * max);
    }

    function getRatPosition(): Coordinate {
        return ratPosition;
    }

    return { 
        placeRat, 
        placeRandomly, 
        getRatPosition 
    };
}
