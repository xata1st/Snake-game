var app = app || {};

app.Evented = (function() {
	var events = {},
        subscribe,
        unsubscribe,
        fire,
        obj = {};

    subscribe = function(eventName, callback, thisArg) {
        if(events[eventName] === undefined) {
            events[eventName] = [];
        }

        events[eventName].push({callback: callback, thisArg: thisArg});
    };

    unsubscribe = function(eventName, callback) {
        var i,
            callbackArr = events[eventName];
        if(callbackArr) {
            for(i = callbackArr.length - 1; i >= 0; i-=1) {
                if(callbackArr[i].callback === callback) {
                    callbackArr.splice(i, 1);
                }
            }
        }
    };

    fire = function(eventName, args) {
        var callbackArr = events[eventName];
        if(callbackArr) {
            callbackArr.forEach(function(item) {
                item.callback.apply(item.thisArg, args);
            });
        }
    };

    obj.subscribe = subscribe;
    obj.unsubscribe = unsubscribe;
    obj.fire = fire;

    return obj;
})();