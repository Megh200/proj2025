"use strict";

const signbtn = document.querySelector('#sign');
const signbox = document.querySelector('.sign-box');
const closebtn = document.querySelector('.closebtn');

const showsignbox = function(){
    signbox.classList.remove('hide');
    document.querySelector('.bluring').classList.remove('hide');
}

const closesignbox = function(){
    signbox.classList.add('hide');
    document.querySelector('.bluring').classList.add('hide');
}

signbtn.addEventListener('click', showsignbox);
closebtn.addEventListener('click', closesignbox);

//now via keyboard

//we can do this method 
// const keyfun = function(btn){
//     if(btn.key == 'c') closesignbox();
// }
// document.addEventListener('keyup',keyfun);


// or this

document.addEventListener('keyup',function (c){
    if(c.key=='c') closesignbox(); }
);







