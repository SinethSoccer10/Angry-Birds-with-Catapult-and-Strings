class SlingShot{
  constructor(bodyA,pointB){
                  var options={
                  bodyA:bodyA,
                  pointB:pointB,
                  stiffness:0.07,
                  length:5

                }
                  
                  
      this.sling1= loadImage("sprites/sling1.png");
    this.sling2= loadImage("sprites/sling2.png");
    this.sling3= loadImage("sprites/sling3.png");
    
    this.pointB=pointB
  this.sling= Constraint.create(options);
  World.add(world,this.sling);
    
  }
  
  fly(){
    this.sling.bodyA= null;
    
  }
  
  
 display(){
   
   
   image(this.sling1,200,22)
    image(this.sling2,170,22)
   
   if(this.sling.bodyA){
    push();
     if(this.sling.bodyA.position.x<220){
        strokeWeight(5)
     stroke(84,39,15)
  line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,this.pointB.x-10,this.pointB.y);
  line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,this.pointB.x+30,this.pointB.y-3);
    image(this.sling3,this.sling.bodyA.position.x-24,this.sling.bodyA.position.y-9,15,30)
        }
    else{
      strokeWeight(3)
     stroke(84,39,15)
  line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,this.pointB.x-10,this.pointB.y);
  line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,this.pointB.x+30,this.pointB.y-3);
    image(this.sling3,this.sling.bodyA.position.x-24,this.sling.bodyA.position.y-9,15,30)
    }
       
    pop();
      }
  
   
   
 }
  
  
}