var Bullet = function() {

	var bullet = {
		image: document.createElement("img"),
		x: player.x,
		y: player.y,
		width: 5,
		height: 5,
		velocityX: 0,
		velocityY: 0
	};
	
	bullet.image.src = "bullet.png";

	var velX = 0;
	var velY = 1;
	var s = Math.sin(player.rotation);
	var c = Math.cos(player.rotation);
	var xVel = (velX * c) - (velY * s);
	var yVel = (velX * s) + (velY * c);

	this.velocityX = xVel * BULLET_SPEED;
	this.velocityY = yVel * BULLET_SPEED;
	this.x += this.velocityX;
	this.y += this.velocityY;
}

Bullet.prototype.draw = function()
{
	context.save();
		context.translate(this.x, this.y);
		context.rotate(this.rotation);
		context.drawImage(this.image, -this.width/2, -this.height/2);
	context.restore();
}