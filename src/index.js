//const sum = require('./sum');
import sum from './sum';
import './image_viewer'; // this file does not export any code, we import like this so it just gets executed

const total = sum(10,5);
console.log(total);