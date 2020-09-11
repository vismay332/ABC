class Garbage {
	constructor(x,y,radius){
	var options={
    isStatic : false,
    restitution: 0.3,
    friction:0.5,
    density: 1.2
	}
	this.body= Bodies.circle(x,y,radius,options);
	World.add(world, this.body);
	this.width=width;
	this.height=height;
	}
	display(){
	var pos = this.body.position;
	var angle=this.body.angle;
	push();
	//circleMode(CENTER);
	fill("purple");
	rect(pos.x, pos.y, this.width, this.height);
	pop();
	}
	};