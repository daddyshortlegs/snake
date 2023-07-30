
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

});
