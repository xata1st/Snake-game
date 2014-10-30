/**
 * Created by xata on 13.10.2014.
 */

var app = {};

window.onload = function() {
    console.log('start');

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

    //snake.start();
    //snake.stop();


    document.addEventListener('keyup', function(evt) {
        var key = evt.keyCode;

        //console.log(evt);
        //console.log('keyup');

        if(key === 38 || key === 87) {
            //up
            //console.log(app.Direction.UP);
            snake.setDirection(app.Direction.UP);
        } else if(key === 37 || key === 83) {
            //left
            //console.log(app.Direction.LEFT);
            snake.setDirection(app.Direction.LEFT);
        } else if(key === 40 || key === 65) {
            //down
            //console.log(app.Direction.DOWN);
            snake.setDirection(app.Direction.DOWN);
        } else if(key === 39 || key === 68) {
            //right
            //console.log(app.Direction.RIGHT);
            snake.setDirection(app.Direction.RIGHT);
        }
    });

    //testIsOpposite();
};


function testIsOpposite() {
    var d = app.Direction;

    console.log(d.isOpposite(d.UP, d.RIGHT), false);
    console.log(d.isOpposite(d.UP, d.LEFT), false);
    console.log(d.isOpposite(d.UP, d.DOWN), true);
    console.log(d.isOpposite(d.RIGHT, d.DOWN), false);
    console.log(d.isOpposite(d.RIGHT, d.LEFT), true);
    console.log(d.isOpposite(d.DOWN, d.LEFT), false);
}