/* eslint-disable max-params */
 
 
import { character } from "./character.js";
export class figther extends character{
  weapon;
  skill;
  constructor(name: string, family: string, age:number, state:string, quote:string, weapon: string, skill:number){
    super(name,family,age,state,quote)
    this.weapon = weapon;
    this.skill = skill;
  }
}
