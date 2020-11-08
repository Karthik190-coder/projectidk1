class Paper{
	constructor(x,y,width,height){
     var options={
		 isStatic:false,
		restitution: 0.3,
		 friction:0.5, 
		 density: 1.2,

	  }
	  createCanvas (400,1600)
	  this.body = Bodies.rectangle(x, y, width, height, options);
	  this.width = width;
	  this.height = height;
	  
	  World.add(world, this.body);
	}
	display(){
	  var pos =this.body.position;
	  var angle=this.body.angle
	  var paper=newPaper(x,y,w,h)
	  ellipse(200,400,20,10)
	  push();
	  translate(pos.x,pos.y);
	  rotate(angle);
	  rectMode(CENTER);
	  fill(255);
	  rect(0,0,this.width, this.height);
	  pop();
	}
  };