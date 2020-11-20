const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Event = Matter.Event;

var ground;

  var particles = [];
   var plinkos = [];
   var divisions = [];

   var divisionHeight = 300;



function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,800);
  //createSprite(400, 200, 50, 50);
  
   ground = new Ground(width/2,height,width,20);

   for (var d = 0; d <=width; d = d + 80) {
    divisions.push(new Divisions(d, height-divisionHeight/2, 10, divisionHeight));
  }


   for (var p = 75; p <=width; p=p+50) {
       plinkos.push(new Plinko(p,75));
   }

   for (var p = 50; p <=width-10; p=p+50) {
      plinkos.push(new Plinko(p,175));
   }

    for (var p = 75; p <=width; p=p+50) {
      plinkos.push(new Plinko(p,275));
   }

    for (var p = 50; p <=width-10; p=p+50){
      plinkos.push(new Plinko(p,375));
   }
   

}

//var divisionHeight = 300;

function draw() {
  background("lightgreen");
  Engine.update(engine);

  ground.display();
  
  for (var i = 0; i < plinkos.length; i++) {  
    plinkos[i].display();
  }
  
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    fill(random(0, 255), random(0, 255), random(0, 255));
  }

 for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  
}

//for (var k = 0; k <=width; k = k + 80) {
 // divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
//}


//for (var j = 40; j <=width; j=j + 50){
  //plinkos.push(new Plinko(j, 75));
//}

//for (var j = 15; j <=width-10; j=j + 50){
  //plinkos.push(new Plinko(j, 175));
//}