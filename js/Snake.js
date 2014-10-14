/**
 * Created by xata on 13.10.2014.
 */

app.Snake = (function() {
    var speed = 1,
        points = 3,
        body = [],
        x = 100,
        y = 100,
        direction,
        speedPoint = 10,
        that = {},
        alive = true,
        interval = null,
        step = 20,
        timeInterval = 1000,
        snakeHtml = document.createElement('div');

    function init() {
        var i;

        body.push(new app.BodyPart(direction, 0, new app.Point(x, y), snakeHtml));

        for(i = 1; i < points; i+=1) {
            body.push(new app.BodyPart(direction, step * i, new app.Point(x, y), snakeHtml));
        }

        show();
    }

    function eat(food) {
        var calories = food.getCalories(),
            bodyElem,
            i;

        for(i = 0; i < calories; i+=1) {
            body.push(new app.BodyPart(direction, step, body[body.length - 1].getPosition(), snakeHtml));

            points += 1;

            if( (points % speedPoint) === 0) {
                speed += 1;
            }
        }
    }

    function changeDirection(value) {
        direction = value;
    }

    function setX(value) {
        x = value;
    }

    function setY(value) {
        y = value;
    }

    function setDirection(value) {
        direction = value;
    }

    function setSpeed(value) {
        speed = value;
    }

    function move() {
        var length = body.length,
            i;
        if(alive) {
            hide();

            for(i = 0; i < length; i+=1) {
                console.log(body[i].getPosition());
            }


            for(i = length - 1; i > 0; i-=1) {
                body[i].setPosition(body[i - 1].getPosition());
            }
            body[0].setPosition(direction, step);

            show();
        }
    }

    function removeInterval() {
        if(interval !== null) {
            window.clearInterval(interval);
        }
    }

    function doBegin() {
        init();

        interval = window.setInterval(function() {
            //debugger;
            move();
        }, timeInterval / speed);
    }

    function updateSpeed() {
        removeInterval();
        doBegin();
    }

    function stop() {
        removeInterval();
    }

    function resume() {
        doBegin();
    }

    function setStep(value) {
        step = value;
    }

    function hide() {
        var length = body.length,
            i;
        for(i = 0; i < length; i+=1) {
            body[i].hide();
        }
    }

    function show() {
        var length = body.length,
            i;
        for(i = 0; i < length; i+=1) {
            body[i].show();
        }
    }

    function setParent(parent) {
        parent.appendChild(snakeHtml);
    }

    that.eat = eat;
    that.changeDirection = changeDirection;
    that.setX = setX;
    that.setY = setY;
    that.setDirection = setDirection;
    that.setSpeed = setSpeed;
    that.start = doBegin;
    that.stop = stop;
    that.resume = resume;
    that.setStep = setStep;
    that.setParent = setParent;
    that.move = move;
    that.init = init;

    return that;
})();