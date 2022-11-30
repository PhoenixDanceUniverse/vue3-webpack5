import _ from 'lodash';
import './style.css'
import Li from './li.png'
import printMe from './print'
 function component() {
   const element = document.createElement('div');
	 const btn = document.createElement('button');
  // lodash（目前通过一个 script 引入）对于执行这一行是必需的

  // lodash 在当前 script 中使用 import 引入
   	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.innerHTML = 'helloWorldJay'
		element.classList.add('hello');
		const myIcon = new Image();
		myIcon.src = Li;
		element.appendChild(myIcon);
		
		btn.innerHTML = 'Click me and check the console!';
		btn.onclick = printMe;
		element.appendChild(btn);
   	
		return element;
 }

 document.body.appendChild(component());