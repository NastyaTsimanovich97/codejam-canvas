import './scss/base.scss';
import './canvas.js';

let canvas4=document.getElementById('canvas4');
let canvas32=document.getElementById('canvas32');
let canvas256=document.getElementById('canvas256');

document.addEventListener('click',function(e){
    let button=e.target;
    if(button.classList.contains('button__canvas32')){
        activeCanvas(canvas32,canvas4,canvas256);
    }
    if(button.classList.contains('button__canvas256')){
        activeCanvas(canvas256,canvas4,canvas32);
    }
    if(button.classList.contains('button__canvas4')){
        activeCanvas(canvas4,canvas32,canvas256);
    }
})
function activeCanvas(active,prev,next){
    active.style.display='block';
    prev.style.display='none';
    next.style.display='none';
}