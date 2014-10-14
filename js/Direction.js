/**
 * Created by xata on 13.10.2014.
 */

app.Direction = (function() {
    var obj = {};

    Object.defineProperties(obj, {
        UP: {
            value: 'up',
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
            value: 'left',
            writable: false
        }
    });

    return obj;
})();