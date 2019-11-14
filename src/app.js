import './scss/base.scss';
import './canvas.js'


let canvas4=document.getElementById('canvas4');
let canvas32=document.getElementById('canvas32');
let canvas256=document.getElementById('canvas256');


document.querySelector('.button__canvas32').addEventListener('click',function(){
    canvas32.style.display='block';
    canvas4.style.display='none';
    canvas256.style.display='none';
});
document.querySelector('.button__canvas256').addEventListener('click',function(){
    canvas256.style.display='block';
    canvas4.style.display='none';
    canvas32.style.display='none';
});
document.querySelector('.button__canvas4').addEventListener('click',function(){
    canvas4.style.display='block';
    canvas32.style.display='none';
    canvas256.style.display='none';
});
