function Product(name, price, weight){
	this.name = name;
  this.price = price;
  this.weight = weight;
}

Product.prototype.delivery = function(){
  return 10;
}

function Phone(model, display){
	this.model = model;
  this.pisplay = display;
}

Product.prototype.hard = function(){
  return 100;
}

Phone.prototype = Object.create(Product.prototype);
Phone.prototype.constructor = Phone;

var iphone = new Phone("5", "6");
console.log(iphone.hard())
console.log(iphone.delivery())
