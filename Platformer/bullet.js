var bullets = [];

function playerShoot()
{
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

	bullet.velocityX = xVel * BULLET_SPEED;
	bullet.velocityY = yVel * BULLET_SPEED;
	bullet.x = player.x;
	bullet.y = player.y;
	bullets.push(bullet);
}

for(var i=0; i<bullets.length; i++)
	{
		bullets[i].x += bullets[i].velocityX;
		bullets[i].y += bullets[i].velocityY;
	}

	for(var i=0; i<bullets.length; i++)
	{
		if(bullets[i].x < -bullets[i].width ||
			bullets[i].x > SCREEN_WIDTH ||
			bullets[i].y < -bullets[i].height ||
			bullets[i].y > SCREEN_HEIGHT)
		{
			bullets.splice(i, 1);
			break;
		}
	}
	for(var i=0; i<bullets.length; i++)
	{
		context.drawImage(bullets[i].image,
		bullets[i].x - bullets[i].width/2,
		bullets[i].y - bullets[i].height/2, 10, 10);
	}
	
		for(var i=0; i<asteroids.length; i++)
	{
		for(var j=0; j<bullets.length; j++)
		{
			if(intersects(
				bullets[j].x, bullets[j].y,
				bullets[j].width, bullets[j].height,
				asteroids[i].x, asteroids[i].y,
				asteroids[i].width, asteroids[i].height) == true)
			{
			switch(asteroids.type) {
            case 0:
                {	
				player.score += value;
				asteroids.splice(i, 1);
				bullets.splice(j, 1);
				break;
				}
			case 1:
                {	
				player.score += value;
				asteroids.splice(i, 1);
				bullets.splice(j, 1);
				break;
				}
			default:
                {	
				player.score += value;
				asteroids.splice(i, 1);
				bullets.splice(j, 1);
				break;
				}
				}
			}
		}
	}
