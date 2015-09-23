var Bullet = function () {
		this.image = document.createElement("img");
		this.x = player.x;
		this.y = player.y;
		this.width = 5;
		this.height = 5;
		this.velocityX = 0;
		this.velocityY = 0;
};

Bullet.prototype.draw = function()
{
	context.save();
		context.translate(this.x, this.y);
		context.rotate(this.rotation);
		context.drawImage(this.image, -this.width/2, -this.height/2);
	context.restore();
}