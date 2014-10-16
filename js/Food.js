/**
 * Created by xata on 13.10.2014.
 */

app.Food = (function() {

    var that = {},
        calories = 1,
        position,
        foodHtml = document.createElement('div');

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

    function setPosition(value) {
        position = value;

        hide();
        changePosition();
        show();
    }

    function changePosition() {
        foodHtml.style.left = position.x + 'px';
        foodHtml.style.top = position.y + 'px';
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

    function move() {

    }

    that.getCalories = getCalories;
    that.setCalories = setCalories;
    that.getPosition = getPosition;
    that.setPosition = setPosition;
    that.setParent = setParent;
    that.move = move;

    return that;
})();