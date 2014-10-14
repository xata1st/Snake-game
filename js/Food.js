/**
 * Created by xata on 13.10.2014.
 */

app.Food = (function() {

    var that = {},
        calories,
        position,
        foodHtml = document.createElement('div');

    foodHtml.className = 'food';

    function getCalories() {
        return calories;
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

    that.getCalories = getCalories;
    that.getPosition = getPosition;
    that.setPosition = setPosition;
    that.setParent = setParent;

    return that;
})();