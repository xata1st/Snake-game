/**
 * Created by xata on 13.10.2014.
 */

var app = app || {};

app.BodyPart = (function() {
    var d = app.Direction;

    function BodyPart(direction, step, position, parent) {
        this.partHtml = document.createElement('div');
        this.partHtml.className = 'bodypart';

        parent.appendChild(this.partHtml);

        this.position = position;
        this.direction = direction;

        switch (this.direction) {
            case d.UP:
                this.position.y -= step;
                break;
            case d.DOWN:
                this.position.y += step;
                break;
            case d.RIGHT:
                this.position.x -= step;
                break;
            case d.LEFT:
                this.position.x += step;
                break;
            default: break;
        }

        this.changePosition();
    }

    BodyPart.prototype.show = function() {
        this.partHtml.style.display = 'block';
    };

    BodyPart.prototype.hide = function() {
        this.partHtml.style.display = 'none';
    };

    BodyPart.prototype.setPosition = function(direction, step) {
        //debugger;
        if(direction instanceof app.Point) {
            this.position.x = direction.x;
            this.position.y = direction.y;
        } else {
            if(!d.isOpposite(this.direction, direction)) {
                this.direction = direction;
            }
            switch (this.direction) {
                case d.UP:
                    this.position.y -= step;
                    break;
                case d.DOWN:
                    this.position.y += step;
                    break;
                case d.RIGHT:
                    this.position.x += step;
                    break;
                case d.LEFT:
                    this.position.x -= step;
                    break;
                default: break;
            }
        }

        this.changePosition();
    };

    BodyPart.prototype.getPosition = function() {
        return this.position;
    };

    BodyPart.prototype.changePosition = function() {
        //this.hide();

        this.partHtml.style.left = this.position.x + 'px';
        this.partHtml.style.top = this.position.y + 'px';

        //this.show();
    };

    BodyPart.prototype.getDirection = function() {
        return this.direction;
    };

    BodyPart.prototype.setDirection = function(value) {
        this.direction = value;
    };

    return BodyPart;
})();