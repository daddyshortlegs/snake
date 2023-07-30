
const Game = require("./game").Game;

describe("Snake", () => {

    let theGame;

    beforeEach(() => {
        theGame = Game();
    });

    it("should put place a dot", () => {
        expect(theGame.getX()).toEqual(0);
        expect(theGame.getY()).toEqual(0);
    });

    it('should move right', () => {
        theGame.tick();

        expect(theGame.getX()).toEqual(1);
        expect(theGame.getY()).toEqual(0);
    });

    it('should move right twice', () => {
        theGame.tick();
        theGame.tick();

        expect(theGame.getX()).toEqual(2);
        expect(theGame.getY()).toEqual(0);
    });

    it('should move right thrice', () => {
        theGame.tick();
        theGame.tick();
        theGame.tick();

        expect(theGame.getX()).toEqual(3);
        expect(theGame.getY()).toEqual(0);
    });

    it('should wrap back to start when past end of world', () => {
        theGame.tick();
        theGame.tick();
        theGame.tick();
        theGame.tick();

        expect(theGame.getX()).toEqual(0);
        expect(theGame.getY()).toEqual(0);
    });

    it('should move down', () => {
        theGame.down();
        theGame.tick();

        expect(theGame.getX()).toEqual(0);
        expect(theGame.getY()).toEqual(1);
    });

    it('should move down twice', () => {
        theGame.down();
        theGame.tick();
        theGame.tick();

        expect(theGame.getX()).toEqual(0);
        expect(theGame.getY()).toEqual(2);
    });

    it('should move down thrice', () => {
        theGame.down();
        theGame.tick();
        theGame.tick();
        theGame.tick();

        expect(theGame.getX()).toEqual(0);
        expect(theGame.getY()).toEqual(3);
    });

    it('should move down and wrap back to top', () => {
        theGame.down();
        theGame.tick();
        theGame.tick();
        theGame.tick();
        theGame.tick();

        expect(theGame.getX()).toEqual(0);
        expect(theGame.getY()).toEqual(0);
    });

    it('should move left', () => {
        theGame.left();
        theGame.tick();

        expect(theGame.getX()).toEqual(3);
        expect(theGame.getY()).toEqual(0);
    });

    it('should move left twice', () => {
        theGame.left();
        theGame.tick();
        theGame.tick();

        expect(theGame.getX()).toEqual(2);
        expect(theGame.getY()).toEqual(0);
    });

    it('should move left thrice', () => {
        theGame.left();
        theGame.tick();
        theGame.tick();
        theGame.tick();

        expect(theGame.getX()).toEqual(1);
        expect(theGame.getY()).toEqual(0);
    });

    it('should move up', () => {
        theGame.up();
        theGame.tick();

        expect(theGame.getX()).toEqual(0);
        expect(theGame.getY()).toEqual(3);
    });

    it('should move up', () => {
        theGame.left();
        theGame.up();
        theGame.tick();

        expect(theGame.getX()).toEqual(0);
        expect(theGame.getY()).toEqual(3);
    });

    it('should move around a bit', () => {
        theGame.tick();
        theGame.down();
        theGame.tick();
        theGame.left();
        theGame.tick();

        expect(theGame.getX()).toEqual(0);
        expect(theGame.getY()).toEqual(1);
    });

    it('should move right', () => {
        theGame.right();
        theGame.tick();

        expect(theGame.getX()).toEqual(1);
        expect(theGame.getY()).toEqual(0);
    });

    it('should move right and down', () => {
        theGame.right();
        theGame.tick();
        theGame.down();
        theGame.tick();

        expect(theGame.getX()).toEqual(1);
        expect(theGame.getY()).toEqual(1);
    });

    it('should move right and down more', () => {
        theGame.right();
        theGame.tick();
        theGame.down();
        theGame.tick();
        theGame.tick();

        expect(theGame.getX()).toEqual(1);
        expect(theGame.getY()).toEqual(2);
    });

    it('should move right and down more then left', () => {
        theGame.right();
        theGame.tick();
        theGame.down();
        theGame.tick();
        theGame.tick();
        theGame.left();
        theGame.tick();

        expect(theGame.getX()).toEqual(0);
        expect(theGame.getY()).toEqual(2);
    });

    it('should move down the right', () => {
        theGame.down();
        theGame.tick();
        theGame.right();
        theGame.tick();

        expect(theGame.getX()).toEqual(1);
        expect(theGame.getY()).toEqual(1);
    });

});
