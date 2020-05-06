class Circle {
  constructor(radius){
    this.radius = radius;
  }
  get diameter(){
      return this.radius*2;
  }
  get circumference(){
    return this.diameter*Math.PI;
  }
  get area(){
    return this.radius*this.radius*Math.PI;
  }
  set diameter(dia){
    this.radius = dia/2;

  }
  set circumference(cir){
    this.radius = cir/(2*Math.PI);

  }
  set area(ar){
    this.radius = Math.sqrt(ar/Math.PI);
  }

}
