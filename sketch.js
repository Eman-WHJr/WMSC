
var wall, thickness;
var bullet,speed, weight;

function setup() {
createCanvas(1600, 400);

speed=random(100,200)
weight=random(30,52)
thickness=random(22,83)

bullet=createSprite(50, 200, 50,5);  
bullet.velocityX = speed;
bullet.shapeColor=color(255);

wall=createSprite(1200, 200, thickness, height/2);  
wall.shapeColor=color("LIGHTBLUE");
  
}


function draw() {
  background(0);  

  if(hasCollided(bullet, wall))
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  	
	if(damage>10)
	{
		wall.shapeColor=color(255,0,0);
		textSize(20);
		fill("red");
		text("Damage = "+ damage,300,300);
		text("Wall is not effective against bullet",300,320);
		
	}

	

	if(damage<10)
	{
		wall.shapeColor=color(0,255,0);
		textSize(20);
		fill("red");
		text("Damage = "+ damage,300,300);
		text("Wall is effective against bullet",300,320);
	}
	
  }


  drawSprites();
 
}


function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}


