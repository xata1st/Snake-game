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
        canSetDirection = true,
        food = null,
        head,
        snakeHtml = document.createElement('div');

    function init() {
        var i;

        body.push(new app.BodyPart(direction, 0, new app.Point(x, y), snakeHtml));

        for(i = 1; i < points; i+=1) {
            body.push(new app.BodyPart(direction, step * i, new app.Point(x, y), snakeHtml));
        }

        head = body[0];

        show();
    }

    function doEat() {
        var calories = food.getCalories(),
            lastBodyElem,
            lastPos,
            i;

        console.log('eating');

        for(i = 0; i < calories; i+=1) {
            lastBodyElem =  body[body.length - 1];
            lastPos = lastBodyElem.getPosition();

            body.push(new app.BodyPart(lastBodyElem.getDirection(), step, new app.Point(lastPos.x, lastPos.y), snakeHtml));

            points += 1;

            if( (points % speedPoint) === 0) {
                speed += 1;
            }
        }

        food.move();
    }

    function eat() {
        var headPos = head.getPosition(),
            foodPos = food.getPosition();

        if(headPos.x === foodPos.x && headPos.y === foodPos.y) {
            doEat();
        }
    }

    function setX(value) {
        x = value;
    }

    function setY(value) {
        y = value;
    }

    function setDirection(value) {
        if(canSetDirection) {
            direction = value;
            canSetDirection = false;
        }
    }

    function setSpeed(value) {
        speed = value;
    }

    function move() {
        var length = body.length,
            i;
        if(alive) {
            if(canMove()) {
                hide();

                for(i = length - 1; i > 0; i-=1) {
                    body[i].setPosition(body[i - 1].getPosition());
                    body[i].setDirection(body[i - 1].getDirection());
                }
                head.setPosition(direction, step);

                show();

                //doEat();
				//eat();

                canSetDirection = true;
            }
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

    function setFood(value) {
        food = value;
    }

    function hide() {
        snakeHtml.style.display = 'none';
    }

    function show() {
        snakeHtml.style.display = 'block';
    }

    function setParent(parent) {
        parent.appendChild(snakeHtml);
    }

    function canMove() {
        var i,
            length = body.length,
            headX = head.getPosition().x,
            headY = head.getPosition().y;

        for(i = 4; i < length; i+=1) {
            if(headX === body[i].getPosition().x && headY === body[i].getPosition().y) {
                console.log('DEAD');
                return false;
            }
        }
        return true;
    }

    that.eat = eat;
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
    that.setFood = setFood;

    return that;
})();