var Lib = Lib || {};

Lib = (function() {
    var obj = {};

    function getRandomBetween(min, max) {
        return Math.random() * (max - min) + min;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    obj.getRandomBetween = getRandomBetween;
    obj.getRandomInt = getRandomInt;

    return obj;
})();