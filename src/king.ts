 
/* eslint-disable max-params */
import { character } from "./character.js";

export class king extends character{
  yearsOfKingdom;
  constructor(name: string, family: string, age:number, state:string, quote:string, yearsOfKingdom: number){
  super(name, family, age, state, quote)
  this.yearsOfKingdom = yearsOfKingdom;
  }
}

