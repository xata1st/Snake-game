/**
 * Created by xata on 13.10.2014.
 */

var app = {};

window.onload = function() {
    console.log('start');

    var food = app.Food,
        container = document.getElementById('container');

    food.setParent(container);
    food.setPosition(new app.Point(200, 200));

    //var bp = new app.BodyPart(app.Direction.UP, 20, new app.Point(300, 300), container);

    var snake = app.Snake;

    snake.setParent(container);
    snake.setDirection(app.Direction.LEFT);

    //snake.init();

    //snake.move();

    snake.start();
    //snake.stop();

    document.addEventListener('keypress', function(evt) {

    }, false)

};