class stn {

    constructor(x,y,width,height,angle){

var optt = {

   
    isStatic:false,
    restitution:0,
    friction:1,
    density:1.2

}

this.body = Bodies.rectangle(x,y,width,height,optt)
this.image = loadImage("image1/stone.png")
this.width = width
this.height = height
World.add(world, this.body)



    }

display(){

var angle = this.body.angle
var tt = this.body.position

imageMode (CENTER)
image (this.image, tt.x, tt.y, this.width, this.height)

push ();
translate(tt.x, tt.y)
rotate (angle)
pop ();





}














}