"use strict";

const randomnum=Math.trunc(Math.random()*6+1);
console.log(randomnum);

// create a image var
const image1 =  "./dice/d" + randomnum + ".jpg";
//  this above expression is written with reference to images like d1.jpg or d2.jpg etc
// so for 'd', there will be the path of image; for nums like 1/2or 3 etc we added randomnum
// that's why we created randomnumber; and then last '.jpg'

document.querySelector('img').setAttribute("src",image1);


// win draw luck game
const play1= Math.trunc(Math.random()*6+1);
const play2= Math.trunc(Math.random()*6+1);
console.log(play1,play2);

if(play1>play2)
    document.querySelector('#result').innerHTML='player1 wins';
else if(play1<play2)
document.querySelector('#result').innerHTML='player2 wins';

else
document.querySelector('#result').innerHTML='DRAW';
