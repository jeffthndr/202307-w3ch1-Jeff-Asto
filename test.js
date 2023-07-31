/* eslint-disable new-cap */
import { assesor } from "./dist/assesor.js";
import { figther } from "./dist/figther.js";
import { king } from "./dist/king.js";
import { shielder } from "./dist/shielder.js";

const user1 = new king('Joffrey Baratheon','Baratheon',50,'alive','vais a morir todos',30);
const user2 = new figther('Jaime Lannister','Lannister',35,'alive','primero pego y leugo pregunto','espada',8);
const user3 = new figther('Daenerys Targaryen','Targaryen',35,'alive','primero pego y leugo pregunto','arco',7);
const user4 = new shielder('Bronn','notFound',45,'alive','soy un loser','Jaime',10)
const user5 = new assesor('Tyrion Lannister','notFound',60,'alive','no sé por que pero creo qeu voy a morir pronto','Daenerys')

const arrayCharacters = []
arrayCharacters.push(user1,user2,user3,user4,user5)
console.log(arrayCharacters)
