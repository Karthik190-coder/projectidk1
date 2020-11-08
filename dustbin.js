class Dustbin{
    constructor(x,y,width,height,angle){
        var options={
            isStatic:true,
         }
         function setup(){
         this.body = Bodies.rectangle(x, y, width, height, options);
         this.width = width;
         this.height = height;
         
         World.add(world, this.body);
       }
      }
       display(){
         var pos =this.body.position;
         var angle=this.body.angle
         push();
         translate(pos.x,pos.y);
         rotate(angle);
         rectMode(CENTER);
         fill(255);
         rect(0,0,this.width, this.height);
         pop();
       }
      }
    function keyPressed(){
      if(keyCode===UP_ARROW){
      
        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
      }
    }
  