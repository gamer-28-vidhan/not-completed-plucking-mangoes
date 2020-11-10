class child {

constructor(x,y,width,height) {

var opt = {
    isStatic:true
}

this.body = Bodies.rectangle(x,y,width,height,opt)
this.width = width
this.height = height
this.image = loadImage("image1/boy.png")
World.add(world, this.body)



}

display(){

var by = this.body.position



imageMode(CENTER)
image (this.image,200, 530, 150, 250)


}










}