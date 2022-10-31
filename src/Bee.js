var Bee = function() {
  //call grub before setting new properties
  Grub.call(this);

  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';


};
//create relationship between Bee and Grub
Bee.prototype = Object.create(Grub.prototype);
//initialize constructor that points back at constructor
Bee.prototype.constructor = Bee;