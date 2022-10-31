var Bee = function() {
  //call grub before setting new properties
  Grub.call(this);

  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';


};
//create relationship between Bee and Grub
//can just use new, don't have to Object.create(Grub.prototype);
Bee.prototype = new Grub;
//initialize constructor that points back at constructor
Bee.prototype.constructor = Bee;