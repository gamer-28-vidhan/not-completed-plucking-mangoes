class fruit {

    constructor(x,y,width,height) {
    
    var opto = {
        isStatic:true,
        restitution:0.2,
        friction:1,
        density:1.2

    }
    
    this.body = Bodies.rectangle(x,y,width,height,opto)
    this.width = width
    this.height = height
    this.image = loadImage("image1/mango.png")
    World.add(world, this.body)
    
    
    
    }
    
    display(){
    
    var by = this.body.position
    
    
    
    imageMode(CENTER)
    image (this.image,by.x, by.y, 40, 40)
    
    
    }
}