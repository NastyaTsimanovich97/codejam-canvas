import * as colorArray from './assets/data/32x32.json'
let canvas4=document.getElementById('canvas4').getContext('2d');

canvas4.fillStyle='#00BCD4';
canvas4.fillRect(0,0,128,128);
canvas4.fillStyle='#FFEB3B'
canvas4.fillRect(128,0,256,128);
canvas4.fillStyle='#00BCD4';
canvas4.fillRect(384,0,128,128);
canvas4.fillStyle='#FFEB3B';
canvas4.fillRect(0,128,128,256);
canvas4.fillStyle='#FFC107';
canvas4.fillRect(128,128,256,256);
canvas4.fillStyle='#FFEB3B';
canvas4.fillRect(384,128,128,256);
canvas4.fillStyle='#00BCD4';
canvas4.fillRect(0,384,128,128);
canvas4.fillStyle='#FFEB3B'
canvas4.fillRect(128,384,256,128);
canvas4.fillStyle='#00BCD4';
canvas4.fillRect(384,384,128,128);

let canvas32=document.getElementById('canvas32').getContext('2d');


for (let i=0;i<colorArray.length;i++){
    for (let j=0;j<colorArray[i].length;j++){
        canvas32.fillStyle='rgb('+colorArray[i][j].join()+')';
        canvas32.fillRect(j*16,i*16,16,16);
    }
}

let canvas256 = document.getElementById('canvas256').getContext('2d');
let img = new Image();

canvas256.drawImage(document.getElementById('canvas_img'),0,0,512,512);

