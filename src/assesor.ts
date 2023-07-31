/* eslint-disable max-params */
 
import { character } from "./character.js";
export class assesor extends character{
  advises;
  constructor(name: string, family: string, age:number, state:string, quote:string, advises: string){
    super(name,family,age,state,quote)
    this.advises = advises
  }
}

