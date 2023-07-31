/* eslint-disable max-params */
export class character {
  name;
  family;
  age;
  state;
  quote;
  

  constructor(name: string, family: string, age:number, state:string, quote:string){
    this.name = name;
    this.family = family;
    this.age = age;
    this.state = state;
    this.quote = quote;
  }
  
}
