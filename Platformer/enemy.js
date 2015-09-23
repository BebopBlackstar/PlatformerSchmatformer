var Enemy = function() {
	this.image = document.createElement("img");
	this.x = 100;
	this.y = 100;
	this.width = 194;
	this.height = 103;
	
	this.image.src = "enemy.png";
};

Enemy.prototype.update = function(deltaTime)
{
	if( typeof(this.rotation) == "undefined" )
		this.rotation = 0;
}

Enemy.prototype.draw = function()
{
	context.save();
		context.translate(this.x, this.y);
		context.rotate(this.rotation);
		context.drawImage(this.image, -this.width/2, -this.height/2);
	context.restore();
}