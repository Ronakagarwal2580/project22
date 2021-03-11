var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800,700);

	// fairyVoice.play();

	fairy = createSprite(random(250,350),450,130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.10;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	star.velocityY = 4;

	engine = Engine.create();
	world = engine.world;
	var fairyOptions = {
		restitution:3
	  }

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
	
	  star = Bodies.circle(400,200,50,fairyOptions);
	  World.add(world,star);
	  console.log(star);

}


function draw() {
  background(bgImg);


	


	
	if(keyDown("down")){
		fairy.velocityY = 4;
		fairy.velocityX = 0;
		}

	if(keyDown("right")){
	fairy.velocityX = 4;
	fairy.velocityY = 0;	
	}

	if(keyDown("left")){
	fairy.velocityX = -4;
	fairy.velocityY = 0;
	
		}

		edges = createEdgeSprites();
		fairy.bounceOff(edges)

		
		if (fairy.isTouching(star) {
			
			star.velocityY = 0;
		
			
	if(keyDown("down")){
		fairy.velocityY = 0;
		fairy.velocityX = 0;
		}

	if(keyDown("right")){
	fairy.velocityX = 0;
	fairy.velocityY = 0;	
	}

	if(keyDown("left")){
	fairy.velocityX = -0;
	fairy.velocityY = 0;
	
		}
		  } 

		Engine.update(engine)



  drawSprites();

}

