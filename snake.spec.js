import { Snake } from "./snake.js";

describe("The snake", () => {

    it('should contain some elements', () => {
        let snake = Snake(2);
        snake.updatePosition(5, 4);
        snake.updatePosition(6, 1);

        let elements = snake.getElements();

        expect(elements).toEqual([
            {x: 5, y: 4},
            {x: 6, y: 1}
        ]);
    });

    it('should contain other elements', () => {
        let snake = Snake(2);
        snake.updatePosition(2, 1);
        snake.updatePosition(8, 1);

        let elements = snake.getElements();

        expect(elements).toEqual([
            {x: 2, y: 1},
            {x: 8, y: 1}
        ]);
    });

    it('should move elements', () => {
        let snake = Snake(2);
        snake.updatePosition(2, 1);
        snake.updatePosition(8, 2);
        snake.updatePosition(7, 3);

        let elements = snake.getElements();

        expect(elements).toEqual([
            {x: 8, y: 2},
            {x: 7, y: 3}
        ]);
    });

    it('should move some more elements', () => {
        let snake = Snake(2);
        snake.updatePosition(2, 1);
        snake.updatePosition(8, 2);
        snake.updatePosition(7, 3);
        snake.updatePosition(4, 4);

        let elements = snake.getElements();

        expect(elements).toEqual([
            {x: 7, y: 3},
            {x: 4, y: 4}
        ]);
    });


    it('should create snake with a size of 3', () => {
        let snake = Snake(3);
        snake.updatePosition(2, 1);
        snake.updatePosition(8, 2);
        snake.updatePosition(3, 3);

        let elements = snake.getElements();

        expect(elements).toEqual([
            {x: 2, y: 1},
            {x: 8, y: 2},
            {x: 3, y: 3},
        ]);
    });

    it('should shuffle array with snake of length 3', () => {
        let snake = Snake(3);
        snake.updatePosition(2, 1);
        snake.updatePosition(8, 2);
        snake.updatePosition(3, 3);
        snake.updatePosition(7, 4);

        let elements = snake.getElements();

        expect(elements).toEqual([
            {x: 8, y: 2},
            {x: 3, y: 3},
            {x: 7, y: 4},
        ]);
    });

    it('should return one element', () => {
        let snake = Snake(1);
        snake.updatePosition(2, 1);

        let elements = snake.getElements();

        expect(elements).toEqual([
            {x: 2, y: 1},
        ]);

    });

    it('should move one element', () => {
        let snake = Snake(1);
        snake.updatePosition(2, 1);
        snake.updatePosition(7, 8);

        let elements = snake.getElements();

        expect(elements).toEqual([
            {x: 7, y: 8},
        ]);
    });

    it('should move two elements', () => {
        let snake = Snake(1);
        snake.updatePosition(2, 1);
        snake.updatePosition(7, 8);
        snake.updatePosition(1, 1);

        let elements = snake.getElements();

        expect(elements).toEqual([
            {x: 1, y: 1},
        ]);
    });

    it('should grow', () => {
        let snake = Snake(1);
        snake.updatePosition(2, 1);
        snake.grow();

        snake.updatePosition(3, 4);

        let elements = snake.getElements();

        expect(elements).toEqual([
            {x: 2, y: 1},
            {x: 3, y: 4},
        ]);
    });

    it('should grow and shuffle', () => {
        let snake = Snake(1);
        snake.updatePosition(2, 1);
        snake.grow();

        snake.updatePosition(3, 4);
        snake.updatePosition(7, 7);

        let elements = snake.getElements();

        expect(elements).toEqual([
            {x: 3, y: 4},
            {x: 7, y: 7},
        ]);
    });

    it('should grow 3 times and shuffle', () => {
        let snake = Snake(1);
        snake.updatePosition(2, 1);
        snake.grow();

        snake.updatePosition(3, 4);
        snake.grow();
        snake.updatePosition(7, 7);

        let elements = snake.getElements();

        expect(elements).toEqual([
            {x: 2, y: 1},
            {x: 3, y: 4},
            {x: 7, y: 7},
        ]);
    });

    it('should not collide', () => {
        let snake = Snake(3);
        snake.updatePosition(0, 0);
        snake.updatePosition(1, 0);
        snake.updatePosition(2, 0);

        let result = snake.collision();

        expect(result).toEqual(false);
    });

    it('should collide', () => {
        let snake = Snake(3);
        snake.updatePosition(0, 0);
        snake.updatePosition(1, 0);
        snake.updatePosition(1, 0);

        let result = snake.collision();

        expect(result).toEqual(true);
    });

    it('should collide on X-axis', () => {
        let snake = Snake(4);
        snake.updatePosition(0, 0);
        snake.updatePosition(1, 0);
        snake.updatePosition(2, 0);
        snake.updatePosition(2, 0);

        let result = snake.collision();

        expect(result).toEqual(true);
    });

    it('should not collide on Y-axis', () => {
        let snake = Snake(4);
        snake.updatePosition(0, 0);
        snake.updatePosition(0, 1);
        snake.updatePosition(0, 2);
        snake.updatePosition(0, 3);

        let result = snake.collision();

        expect(result).toEqual(false);
    });

    it('should collide on Y-axis', () => {
        let snake = Snake(4);
        snake.updatePosition(0, 0);
        snake.updatePosition(0, 1);
        snake.updatePosition(0, 2);
        snake.updatePosition(0, 2);

        let result = snake.collision();

        expect(result).toEqual(true);
    });

    it('should collide on both axis', () => {
        let snake = Snake(4);
        snake.updatePosition(0, 0);
        snake.updatePosition(1, 0);
        snake.updatePosition(1, 1);
        snake.updatePosition(0, 1);
        snake.updatePosition(0, 1);

        let result = snake.collision();

        expect(result).toEqual(true);
    });

});
