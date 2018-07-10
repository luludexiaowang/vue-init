import _ from 'lodash';
// tree shaking
// import {cube} from './math.js';
import './style.css';
import Icon from './icon.png';
import './iconfont/iconfont.css'
import printMe from './print.js';

function component(){
  const element = document.createElement('div');
  
  const btn = document.createElement('button');
  element.innerHTML = _.join(['hello', 'kingj123'],' ')
  element.classList.add('hello');
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon)

  const iconfont = document.createElement('i')
  iconfont.classList.add('icon','iconfont','icon-setting')
  element.appendChild(iconfont)
  btn.innerHTML = ('click e')
  btn.onclick = printMe;
  element.appendChild(btn)

  // tree shaking
  // const element = document.createElement('pre');
  // element.innerHTML = [
  //   'hello webpack!',
  //   '5 vcubed is equal to ' + cube(5),
  // ].join('\n\n')

  return element;

}

document.body.appendChild(component())

// if(module.hot){
//   module.hot.accept('./print.js',function(){
//     console.log('Acceptiing the update')
//     printMe();
//   })
// }