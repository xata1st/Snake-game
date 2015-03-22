/**
 * Created by Sergey on 22.03.2015.
 */

(function() {
    function T() {
        this.x = 'x';

        this.getX = function() {
            console.log(this.x);
            return this.x;
        };
    }

    var tObj = new T();

    function onSomeE() {
        console.log('onSomeE');
    }

    app.Evented.subscribe('log', function() {
        console.log(123);
    });

    app.Evented.subscribe('log', tObj.getX, tObj);

    app.Evented.subscribe('someE', onSomeE);

    app.Evented.fire('log');
    app.Evented.fire('someE');

    app.Evented.unsubscribe('someE', onSomeE);
    app.Evented.unsubscribe('log', tObj.getX);

    console.log('------------------------');

    app.Evented.fire('log');
    app.Evented.fire('someE');

})();