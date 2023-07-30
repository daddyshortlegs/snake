
const Game = require("./game").Game;

describe("Snake", () => {

    it("should put place a dot", () => {

        let theGame = Game();


        expect(theGame.getX()).toEqual(0);
        expect(theGame.getY()).toEqual(0);
    });

});
