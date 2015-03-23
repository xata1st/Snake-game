/**
 * Created by xata on 13.10.2014.
 */

var app = app || {};

app.Field = (function() {

	var that = {},
		x,
		y,
		right,
		bottom,
		width,
		height,
		html = document.createElement('div'),
		instance = null;
		
	function init() {
		html.className = 'field';
	}
		
	function getTop() {
		return y;
	}
	
	function getRight() {
		return right;
	}
	
	function getBottom() {
		return bottom;
	}
	
	function getLeft() {
		return x;
	}

    function getRandomPosition(param) {
        return new app.Point(Lib.getRandomInt(0, width - param.width), Lib.getRandomInt(0, height - param.height));
    }

    function getHTML() {
        return html;
    }
	
	that.getTop = getTop;
	that.getRight = getRight;
	that.getBottom = getBottom;
	that.getLeft = getLeft;
    that.getRandomPosition = getRandomPosition;
    that.getHTML = getHTML;
	
	function create(parent, ax, ay, awidth, aheight) {
		init();
		if(ax !== undefined) {
			x = ax;
			html.style.left = x + 'px';
		} else {
			x = parseInt(html.style.left);
		}
		
		if(ay !== undefined) {
			y = ay;
			html.style.top = y + 'px';
		} else {
			y = parseInt(html.style.top);
		}
		
		if(awidth !== undefined) {
			width = awidth;
			html.style.width = width + 'px';
		} else {
			width = html.clientWidth;
		}
		
		if(aheight !== 0) {
			height = aheight;
			html.style.height = height + 'px';
		} else {
			height = html.clientHeight;
		}		
		
		right = x + width;
		bottom = y + height;
		
		parent.appendChild(html);
		
		return that;
	}
	
	function getInstance(parent, ax, ay, awidth, aheight) {
		if(instance === null) {
			return create(parent, ax, ay, awidth, aheight);
		} else {
			return instance;
		}
	}
	
	return getInstance;
})();