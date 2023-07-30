
const Game = require("./game").Game;

describe("Snake", () => {

    let theGame;

    beforeEach(() => {
        theGame = Game();
    });

    it("should put place a dot", () => {
        let theSnake = theGame.getSnake();
        expect(theSnake[0].x).toEqual(0);
        expect(theSnake[0].y).toEqual(0);
    });

    it('should move right', () => {
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake[0].x).toEqual(1);
        expect(theSnake[0].y).toEqual(0);
    });

    it('should move right twice', () => {
        theGame.tick();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake[0].x).toEqual(2);
        expect(theSnake[0].y).toEqual(0);
    });

    it('should move right thrice', () => {
        theGame.tick();
        theGame.tick();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake[0].x).toEqual(3);
        expect(theSnake[0].y).toEqual(0);
    });

    it('should wrap back to start when past end of world', () => {
        theGame.tick();
        theGame.tick();
        theGame.tick();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake[0].x).toEqual(0);
        expect(theSnake[0].y).toEqual(0);
    });

    it('should move down', () => {
        theGame.down();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake[0].x).toEqual(0);
        expect(theSnake[0].y).toEqual(1);
    });

    it('should move down twice', () => {
        theGame.down();
        theGame.tick();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake[0].x).toEqual(0);
        expect(theSnake[0].y).toEqual(2);
    });

    it('should move down thrice', () => {
        theGame.down();
        theGame.tick();
        theGame.tick();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake[0].x).toEqual(0);
        expect(theSnake[0].y).toEqual(3);
    });

    it('should move down and wrap back to top', () => {
        theGame.down();
        theGame.tick();
        theGame.tick();
        theGame.tick();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake[0].x).toEqual(0);
        expect(theSnake[0].y).toEqual(0);
    });

    it('should move left', () => {
        theGame.left();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake[0].x).toEqual(3);
        expect(theSnake[0].y).toEqual(0);
    });

    it('should move left twice', () => {
        theGame.left();
        theGame.tick();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake[0].x).toEqual(2);
        expect(theSnake[0].y).toEqual(0);
    });

    it('should move left thrice', () => {
        theGame.left();
        theGame.tick();
        theGame.tick();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake[0].x).toEqual(1);
        expect(theSnake[0].y).toEqual(0);
    });

    it('should move up', () => {
        theGame.up();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake[0].x).toEqual(0);
        expect(theSnake[0].y).toEqual(3);
    });

    it('should move up', () => {
        theGame.left();
        theGame.up();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake[0].x).toEqual(0);
        expect(theSnake[0].y).toEqual(3);
    });

    it('should move around a bit', () => {
        theGame.tick();
        theGame.down();
        theGame.tick();
        theGame.left();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake[0].x).toEqual(0);
        expect(theSnake[0].y).toEqual(1);
    });

    it('should move right', () => {
        theGame.right();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake[0].x).toEqual(1);
        expect(theSnake[0].y).toEqual(0);
    });

    it('should move right and down', () => {
        theGame.right();
        theGame.tick();
        theGame.down();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake[0].x).toEqual(1);
        expect(theSnake[0].y).toEqual(1);
    });

    it('should move right and down more', () => {
        theGame.right();
        theGame.tick();
        theGame.down();
        theGame.tick();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake[0].x).toEqual(1);
        expect(theSnake[0].y).toEqual(2);
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
        expect(theSnake[0].x).toEqual(0);
        expect(theSnake[0].y).toEqual(2);
    });

    it('should move down the right', () => {
        theGame.down();
        theGame.tick();
        theGame.right();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake[0].x).toEqual(1);
        expect(theSnake[0].y).toEqual(1);

    });

    xit('should grow snake', () => {
        theGame.grow();
        theGame.right();
        theGame.tick();

        let theSnake = theGame.getSnake();
        expect(theSnake[0].x).toEqual(1);
        expect(theSnake[0].y).toEqual(0);
        expect(theSnake[1].x).toEqual(0);
        expect(theSnake[1].y).toEqual(0);
    });
});
