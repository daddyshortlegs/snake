const Snake = require("./snake").Snake;

describe("The snake", () => {

    it('should contain some elements', () => {
        let snake = Snake(2);
        snake.addElement(5, 4);
        snake.addElement(6, 1);

        let elements = snake.getElements();

        expect(elements).toEqual([
            {x: 5, y: 4},
            {x: 6, y: 1}
        ]);
    });

    it('should contain other elements', () => {
        let snake = Snake(2);
        snake.addElement(2, 1);
        snake.addElement(8, 1);

        let elements = snake.getElements();

        expect(elements).toEqual([
            {x: 2, y: 1},
            {x: 8, y: 1}
        ]);
    });

    it('should move elements', () => {
        let snake = Snake(2);
        snake.addElement(2, 1);
        snake.addElement(8, 2);
        snake.addElement(7, 3);

        let elements = snake.getElements();

        expect(elements).toEqual([
            {x: 8, y: 2},
            {x: 7, y: 3}
        ]);
    });

    it('should move some more elements', () => {
        let snake = Snake(2);
        snake.addElement(2, 1);
        snake.addElement(8, 2);
        snake.addElement(7, 3);
        snake.addElement(4, 4);

        let elements = snake.getElements();

        expect(elements).toEqual([
            {x: 7, y: 3},
            {x: 4, y: 4}
        ]);
    });


    it('should create snake with a size of 3', () => {
        let snake = Snake(3);
        snake.addElement(2, 1);
        snake.addElement(8, 2);
        snake.addElement(3, 3);

        let elements = snake.getElements();

        expect(elements).toEqual([
            {x: 2, y: 1},
            {x: 8, y: 2},
            {x: 3, y: 3},
        ]);
    });

    it('should shuffle array with snake of length 3', () => {
        let snake = Snake(3);
        snake.addElement(2, 1);
        snake.addElement(8, 2);
        snake.addElement(3, 3);
        snake.addElement(7, 4);

        let elements = snake.getElements();

        expect(elements).toEqual([
            {x: 8, y: 2},
            {x: 3, y: 3},
            {x: 7, y: 4},
        ]);
    });
});
