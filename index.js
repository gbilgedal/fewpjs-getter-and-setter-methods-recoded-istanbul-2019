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

  }
  set circumference(cir){

  }
  set area(ar){
    
  }



  
}