/**
 * Created by xata on 13.10.2014.
 */

var app = app || {};

app.Food = function() {

    var that = {},
        calories = 1,
        position,
        foodHtml = document.createElement('div'),
        width = 20,
        height = 20,
        evented;

    foodHtml.className = 'food';

    function getCalories() {
        return calories;
    }

    function setCalories(value) {
        calories = value;
    }

    function getPosition() {
        return position;
    }

    function setDomPosition() {
        foodHtml.style.left = position.x + 'px';
        foodHtml.style.top = position.y + 'px';
    }

    function redraw() {
        hide();
        setDomPosition();
        show();
    }

    function countPosition(value) {
        var modX = value.x % width,
            modY = value.y % height,
            x,
            y;

        if(modX) {
            if(modX > width / 2) {
                x = value.x + (width - modX);
            } else {
                x = value.x - modX;
            }
        }

        if(modY) {
            if(modY > height / 2) {
                y = value.y + (height - modY);
            } else {
                y = value.y - modY;
            }
        }

        return new app.Point(x, y);
    }

    function setPosition(value) {
        position = countPosition(value);
        redraw();

        evented.fire('food:position:change', position);
    }

    function show() {
        foodHtml.style.display = 'block';
    }

    function hide() {
        foodHtml.style.display = 'none';
    }

    function setParent(parent) {
        parent.appendChild(foodHtml);
    }

    function getWidth() {
        return width;
    }

    function getHeight() {
        return height;
    }

    function setEvented(value) {
        evented = value;
    }

    function init(param) {
        setCalories(param.calories);
        setParent(param.parent);
        setEvented(param.evented);
    }

    that.getWidth = getWidth;
    that.getHeight = getHeight;
    that.getCalories = getCalories;
    that.getPosition = getPosition;
    that.setPosition = setPosition;
    that.init = init;
    //that.setCalories = setCalories;
    //that.setParent = setParent;

    return that;
};