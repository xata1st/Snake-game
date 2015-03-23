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

    function changePosition() {
        hide();
        setDomPosition();
        show();
    }

    function setPosition(value) {
        position = value;

        changePosition();

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