function Cat(name, weight) {
	this.name = name;
	this.weight = weight;
	this.stomatch = [];
}

function Mouse(name) {
	this.name = name;
	this.isDie = false;
}

Cat.prototype.eat = function (mouse) {
	this.stomatch.push(mouse);
	this.weight +=1;
	mouse.isDie = true;
}



var tom = new Cat("Tom", 10);
var jerry = new Mouse("Jerry");
tom.eat(jerry);

console.log(tom);
console.log(jerry);