/* eslint-disable max-params */
 
import { character } from "./character.js";
export class shielder extends character{
  serve;
  gradeServe;
  constructor(name: string, family: string, age:number, state:string, quote:string,serve:string,gradeServe:number){
  super(name,family,age,state,quote)
  this.serve = serve
  this.gradeServe = gradeServe
  }
}
