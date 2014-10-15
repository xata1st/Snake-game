/**
 * Created by xata on 13.10.2014.
 */

app.Direction = (function() {
    var obj = {};

    Object.defineProperties(obj, {
        UP: {
            value: 'up!!',
            writable: false
        },
        DOWN: {
            value: 'down',
            writable: false
        },
        RIGHT: {
            value: 'right',
            writable: false
        },
        LEFT: {
            value: 'left!',
            writable: false
        }
    });

    function isOpposite(val1, val2) {
        var len1 = val1.length,
            len2 = val2.length;

        if(len1 === len2) {
            return true;
        }
        return false;
    }

    obj.isOpposite = isOpposite;

    return obj;
})();