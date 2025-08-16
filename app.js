let gameseq=[];
let userseq=[];

let btns=["yellow","red","green","purple"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game has started");
        started=true;
        levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randcol=btns[randIdx];
    let randbtn=document.querySelector(`.${randcol}`);

    gameseq.push(randcol);
    console.log(gameseq);

    btnflash(randbtn);
};

function checkans(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over ! Your score was <b> ${level}</b> <br>press any key to start Again.`;
        reset();
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white",500
        });
    }
}

function btnpress(){
    console.log(this);
    let btn=this;
    btnflash(btn);
    usercol=btn.getAttribute("id");
    userseq.push(usercol);

    checkans(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
};
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}