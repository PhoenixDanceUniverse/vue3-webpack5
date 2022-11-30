import _ from 'lodash';
console.log(_.join(['Another', 'module', 'loaded!'], ' '));
export default function printMe() {
    console.log('I get called from print.js!');
  }