/**
 * Created by xata on 13.10.2014.
 */
app.BodyPart = (function() {

    function BodyPart(direction, step, position, parent) {
        this.partHtml = document.createElement('div');
        this.partHtml.className = 'bodypart';

        parent.appendChild(this.partHtml);

        this.position = position;

        switch (direction) {
            case app.Direction.UP:
                this.position.y -= step;
                break;
            case app.Direction.DOWN:
                this.position.y += step;
                break;
            case app.Direction.RIGHT:
                this.position.x -= step;
                break;
            case app.Direction.LEFT:
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
            switch (direction) {
                case app.Direction.UP:
                    this.position.y += step;
                    break;
                case app.Direction.DOWN:
                    this.position.y -= step;
                    break;
                case app.Direction.RIGHT:
                    this.position.x += step;
                    break;
                case app.Direction.LEFT:
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

    return BodyPart;
})();