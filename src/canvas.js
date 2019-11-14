import * as colorArray from './assets/data/32x32.json';

let canvas=document.getElementById('canvas').getContext('2d');

function createCanvas4(canvas){
  canvas.fillStyle='#00BCD4';
  canvas.fillRect(0,0,128,128);
  canvas.fillStyle='#FFEB3B';
  canvas.fillRect(128,0,256,128);
  canvas.fillStyle='#00BCD4';
  canvas.fillRect(384,0,128,128);
  canvas.fillStyle='#FFEB3B';
  canvas.fillRect(0,128,128,256);
  canvas.fillStyle='#FFC107';
  canvas.fillRect(128,128,256,256);
  canvas.fillStyle='#FFEB3B';
  canvas.fillRect(384,128,128,256);
  canvas.fillStyle='#00BCD4';
  canvas.fillRect(0,384,128,128);
  canvas.fillStyle='#FFEB3B';
  canvas.fillRect(128,384,256,128);
  canvas.fillStyle='#00BCD4';
  canvas.fillRect(384,384,128,128);
}
createCanvas4(canvas);


function createCanvas32(canvas){
  for (let i=0;i<colorArray.length;i++){
    for (let j=0;j<colorArray[i].length;j++){
        canvas.fillStyle='rgb('+colorArray[i][j].join()+')';
        canvas.fillRect(j*16,i*16,16,16);
    }
  }
}


function createCanvas256(canvas){
  let img = new Image();
  canvas.drawImage(document.getElementById('canvas_img'),0,0,512,512);
}

document.addEventListener('click',function(e){
  let button=e.target;
  if(button.classList.contains('button__canvas4')){
    createCanvas4(canvas);
}
  if(button.classList.contains('button__canvas32')){
    createCanvas32(canvas);
  }
  if(button.classList.contains('button__canvas256')){
    createCanvas256(canvas);
  }
})