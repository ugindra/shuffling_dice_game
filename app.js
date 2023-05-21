var imgg1=document.querySelector("#person_1");
var imgg2=document.querySelector("#person_2");
var bttn=document.querySelector("#btn");

bttn.addEventListener("click",()=>{
    var randomNumber1=Math.floor(Math.random()*6)+1;
    var randomNumber2=Math.floor(Math.random()*6)+1;

    imgg1.setAttribute("src","./images/dice"+randomNumber1+".png");
    imgg2.setAttribute("src","./images/dice"+randomNumber2+".png");
    
    var head=document.querySelector("#heading");

    if(randomNumber1==randomNumber2){
        head.innerHTML="IT'S A DRAW";
    }
    else if(randomNumber1>randomNumber2){
        head.innerHTML="PLAYER-1 WON THE GAME 🚩";    
    }
    else{
        head.innerHTML="PLAYER-2 WON THE GAME 🚩";
    }
});









