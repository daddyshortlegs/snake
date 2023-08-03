import { Game } from "./game.js";
import expect from "expect";

describe("Snake game", () => {

    let theGame;

    beforeEach(() => {
        theGame = Game(3, 3, false);
    });

    it("should put place a dot", () => {
        let theSnake = theGame.getSnake();
        expect(theSnake.getX()).toEqual(0);
        expect(theSnake.getY()).toEqual(0);
    });

    it('should move right', () => {
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake.getX()).toEqual(1);
        expect(theSnake.getY()).toEqual(0);
    });

    it('should move right twice', () => {
        theGame.tick();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake.getX()).toEqual(2);
        expect(theSnake.getY()).toEqual(0);
    });

    it('should move right thrice', () => {
        theGame.tick();
        theGame.tick();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake.getX()).toEqual(3);
        expect(theSnake.getY()).toEqual(0);
    });

    it('should wrap back to start when past end of world', () => {
        theGame.tick();
        theGame.tick();
        theGame.tick();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake.getX()).toEqual(0);
        expect(theSnake.getY()).toEqual(0);
    });

    it('should move down', () => {
        theGame.down();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake.getX()).toEqual(0);
        expect(theSnake.getY()).toEqual(1);
    });

    it('should move down twice', () => {
        theGame.down();
        theGame.tick();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake.getX()).toEqual(0);
        expect(theSnake.getY()).toEqual(2);
    });

    it('should move down thrice', () => {
        theGame.down();
        theGame.tick();
        theGame.tick();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake.getX()).toEqual(0);
        expect(theSnake.getY()).toEqual(3);
    });

    it('should move down and wrap back to top', () => {
        theGame.down();
        theGame.tick();
        theGame.tick();
        theGame.tick();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake.getX()).toEqual(0);
        expect(theSnake.getY()).toEqual(0);
    });

    it('should move left', () => {
        theGame.left();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake.getX()).toEqual(3);
        expect(theSnake.getY()).toEqual(0);
    });

    it('should move left twice', () => {
        theGame.left();
        theGame.tick();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake.getX()).toEqual(2);
        expect(theSnake.getY()).toEqual(0);
    });

    it('should move left thrice', () => {
        theGame.left();
        theGame.tick();
        theGame.tick();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake.getX()).toEqual(1);
        expect(theSnake.getY()).toEqual(0);
    });

    it('should move up', () => {
        theGame.up();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake.getX()).toEqual(0);
        expect(theSnake.getY()).toEqual(3);
    });

    it('should move up', () => {
        theGame.left();
        theGame.up();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake.getX()).toEqual(0);
        expect(theSnake.getY()).toEqual(3);
    });

    it('should move around a bit', () => {
        theGame.tick();
        theGame.down();
        theGame.tick();
        theGame.left();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake.getX()).toEqual(0);
        expect(theSnake.getY()).toEqual(1);
    });

    it('should move right', () => {
        theGame.right();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake.getX()).toEqual(1);
        expect(theSnake.getY()).toEqual(0);
    });

    it('should move right and down', () => {
        theGame.right();
        theGame.tick();
        theGame.down();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake.getX()).toEqual(1);
        expect(theSnake.getY()).toEqual(1);
    });

    it('should move right and down more', () => {
        theGame.right();
        theGame.tick();
        theGame.down();
        theGame.tick();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake.getX()).toEqual(1);
        expect(theSnake.getY()).toEqual(2);
    });

    it('should move right and down more then left', () => {
        theGame.right();
        theGame.tick();
        theGame.down();
        theGame.tick();
        theGame.tick();
        theGame.left();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake.getX()).toEqual(0);
        expect(theSnake.getY()).toEqual(2);
    });

    it('should move down the right', () => {
        theGame.down();
        theGame.tick();
        theGame.right();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake.getX()).toEqual(1);
        expect(theSnake.getY()).toEqual(1);
    });

    it('should grow snake', () => {
        theGame.grow();
        theGame.right();
        theGame.tick();

        let theSnake = theGame.getSnakeBody();
        expect(theSnake.length).toEqual(2);
        expect(theSnake[0].x).toEqual(0);
        expect(theSnake[0].y).toEqual(0);
        expect(theSnake[1].x).toEqual(1);
        expect(theSnake[1].y).toEqual(0);
    });

    it('should place rat', () => {
        theGame.placeRat(1, 1);
        theGame.right();
        theGame.tick();
        theGame.tick();
        theGame.tick();

        let theSnake = theGame.getSnakeBody();
        expect(theSnake.length).toEqual(1);
    });

    it('should eat rat and grow', () => {
        theGame.placeRat(1, 0);
        theGame.right();
        theGame.tick();
        theGame.tick();
        theGame.tick();

        let theSnake = theGame.getSnakeBody();
        expect(theSnake.length).toEqual(2);
    });

    it('should check for game over and be false', () => {
        theGame.right();
        theGame.tick();
        theGame.tick();

        const result = theGame.isGameOver();
        expect(result).toEqual(false);
    });

    it('should be game over when snake collides into itself', () => {
        theGame.grow();
        theGame.grow();
        theGame.grow();
        theGame.grow();
        theGame.right();
        theGame.tick();
        theGame.down();
        theGame.tick();
        theGame.left();
        theGame.tick();
        theGame.up();
        theGame.tick();

        const result = theGame.isGameOver();
        expect(result).toEqual(true);
    });
});
