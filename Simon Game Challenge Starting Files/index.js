let userpattern = [];
let gamepattern =[];
let level =0;
let started = false;
let colorpattern = ["green","red","yellow","blue"];

document.body.addEventListener("keypress",function(){
    if(!started){
        document.querySelector("h1").textContent = "Level "+level;
        document.querySelector("#score").textContent = "";
        nextLevel();
        started = true;
    }
});
for(let i=0;i<4;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",function(){
    console.log(this.getAttribute("id"));
      userpattern.push(this.getAttribute("id"));
      animated(this.getAttribute("id"));
        playsound(this.getAttribute("id"));
        checkpattern(userpattern.length-1);
 
    });
    }
    

function checkpattern(currentlevel){
if(userpattern[currentlevel]==gamepattern[currentlevel]) {
    if(userpattern.length==gamepattern.length){
        setTimeout(function (){
          nextLevel();
          document.querySelector("h1").textContent = "Level "+level;
        },1000);
    }
}
    else{
        playsound("wrong");
        document.querySelector("h1").textContent = "game over , To start click any key";
        document.querySelector("#score").textContent = "your score is "+level;

        setTimeout(function(){
          
          
            startover();
        }
        ,1000);
        
}
}


function startover(){
level =0;
gamepattern = [];
userpattern = [];
started = false;

}





function nextLevel(){
userpattern =[];
level++;
let randomNumber = Math.floor(Math.random()*10)%4;
console.log(randomNumber);
gamepattern.push(colorpattern[randomNumber]);

animated(colorpattern[randomNumber]);
playsound(colorpattern[randomNumber]);

}


function playsound(a){
    a = "sounds/"+a+".mp3";
 
  let audio = new Audio(a);
  audio.play();

}



function animated(color){

    $("body").css("backgroundColor",color);
    setTimeout(function(){
        $("body").css("backgroundColor","#011f3f");
    },1000);

}



