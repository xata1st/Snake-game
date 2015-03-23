/**
 * Created by xata on 13.10.2014.
 */

var app = app || {};

function testSnake() {
    var food = app.Food,
        container = document.getElementById('container'),
        field = new app.Field(container);


    food.setParent(container);
    food.setPosition(new app.Point(200, 200));

    //var bp = new app.BodyPart(app.Direction.UP, 20, new app.Point(300, 300), container);

    var snake = app.Snake;

    snake.setParent(container);
    snake.setDirection(app.Direction.LEFT);
    snake.setFood(food);

    //snake.init();

    //snake.move();

    snake.start();
    //snake.stop();


    document.addEventListener('keyup', function(evt) {
        var key = evt.keyCode;

        if(key === 38 || key === 87) {
            snake.setDirection(app.Direction.UP);
        } else if(key === 37 || key === 83) {
            snake.setDirection(app.Direction.LEFT);
        } else if(key === 40 || key === 65) {
            snake.setDirection(app.Direction.DOWN);
        } else if(key === 39 || key === 68) {
            snake.setDirection(app.Direction.RIGHT);
        } else if(key === 13) {
            snake.stop();
        }
    });

}

window.onload = function() {
    //testIsOpposite();

    testFood();
};


function testFood() {
    var food = app.Food(),
        field = app.Field(document.getElementById('container'), 100, 100, 400, 400),
        snake = app.Snake(),
        evented = app.Evented,
        d = app.Direction;


    food.init({
        calories: 1,
        parent: field.getHTML(),
        evented: evented
    });

    snake.init({
        parent: field.getHTML(),
        direction: d.LEFT,
        evented: evented
    });

    evented.subscribe('food:position:change', function(position) {
        console.dir(position);
    });

    evented.subscribe('snake:move:step', function(position) {
        console.dir(position);
    });

    food.setPosition(field.getRandomPosition({width: food.getWidth(), height: food.getHeight()}));

    snake.start();

    document.addEventListener('keyup', function(evt) {
        var key = evt.keyCode;

        if(key === 38 || key === 87) {
            snake.setDirection(app.Direction.UP);
        } else if(key === 37 || key === 83) {
            snake.setDirection(app.Direction.LEFT);
        } else if(key === 40 || key === 65) {
            snake.setDirection(app.Direction.DOWN);
        } else if(key === 39 || key === 68) {
            snake.setDirection(app.Direction.RIGHT);
        } else if(key === 13) {
            snake.stop();
        }
    });
}

function testIsOpposite() {
    var d = app.Direction;

    console.log(d.isOpposite(d.UP, d.RIGHT), false);
    console.log(d.isOpposite(d.UP, d.LEFT), false);
    console.log(d.isOpposite(d.UP, d.DOWN), true);
    console.log(d.isOpposite(d.RIGHT, d.DOWN), false);
    console.log(d.isOpposite(d.RIGHT, d.LEFT), true);
    console.log(d.isOpposite(d.DOWN, d.LEFT), false);
}