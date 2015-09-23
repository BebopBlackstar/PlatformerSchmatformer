
var Vector2 = function() {
	this.x = 0;
	this.y = 0;	
};

Vector2.prototype.set = function (x, y) {
	this.x = x;
	this.y = y;
};

Vector2.prototype.normalize = function (vector) {
  var mag = Math.sqrt(this.x * this.x + this.y * this.y);
  this.x = this.x / mag;
  this.y = this.y / mag;
};

Vector2.prototype.add = function (vector) {
	this.x += vector.x;
	this.y += vector.y;
};

Vector2.prototype.subtract = function (vector) {
	this.x -= vector.x;
	this.y -= vector.y;
};

Vector2.prototype.multiplyScalar = function (num) {
	this.x *= scalar;
	this.y *= scalar;
};

