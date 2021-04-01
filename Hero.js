class Hero {
   constructor(x,y,width,height) {
     var options = {
         isStatic: true,
         restitution:0,
         friction:0,
         density:1
     }
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;
     this.image=loadImage("clipart18713.png")
     World.add(world, this.body);
   }
   display(){
     var pos =this.body.position;
     imageMode(CENTER);
     fill("white");
     image(this.image, pos.x, pos.y, 50, 50);
   }
 }