let gameseq =[];
let userseq =[];

let btns = ["yellow" ,"red" ,"purple","green"];

let started = false;

let level = 0;
 
let highscore = localStorage.getItem(0);

let h2 = document.querySelector("h2");



document.addEventListener("keypress" ,function(){
   // console.log("start the game ")
   if(started == false){
    console.log("game is started");
    started = true;

    levelup();
   }
});

function gameflash(btn){
  btn.classList.add("gameflash");
  setTimeout(function(){
    btn.classList.remove("gameflash");
  }, 250);
    
}

function userflash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  }, 250);
    
}

function levelup(){
  userseq =[];
    level++;
    h2.innerText = `Level ${level}`;
  
  let randinx = Math.floor(Math.random() * 4 );
  let randcolor = btns[randinx];
  let randbtn = document.querySelector(`.${randcolor}`);
   
   gameseq.push(randcolor);
   console.log(gameseq);
    gameflash(randbtn);
}

function checkans(indx){  
  if(userseq[indx] === gameseq[indx]){
    if(userseq.length == gameseq.length){
       setTimeout(levelup ,1000);
    }
  }else{
     
    if (level > highscore){
      highscore = level;
      localStorage.setItem("highscore", highscore);
    }
    h2.innerHTML = `Game is Over!Your socre was <b>${level} </b> <br> 
      Higest score : ${highscore} <br> <br> press any key to restarte the game`;

    document.querySelector("body").style.backgroundColor= "red";
    setTimeout(function(){
     document.querySelector("body").style.backgroundColor= "white";
    },150)
     reset();
  }
 
}
function btnpress () {
  let btn = this ;
  userflash(btn);
  
  usercolor = btn.getAttribute("id");
  console.log(usercolor);
  userseq.push(usercolor);
  checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");

for(btn of allbtns){

 btn.addEventListener("click", btnpress);

}

function reset(){
  started = false;
  gameseq =[];
  userseq =[];
  level = 0; 
}
