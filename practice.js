let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let  btn = ['red','blue','purple','yellow'];
let h2 = document.querySelector('h2')
document.addEventListener('keypress',function(){
    if(started==false){
        console.log("Started");
        started = true;
    }
    levelUp();
});

function btnFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },200);
 
}
function userInp(btn){
    btn.classList.add('flash1');
    setTimeout(function(){
        btn.classList.remove('flash1')
    },200);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `level ${level}`;

    let ran = Math.floor(Math.random()*4);
    let ranColor = btn[ran];
    let ranBtn = document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    console.log(gameSeq);

    btnFlash(ranBtn);
}
    function checkAns(idx){
       
        if(userSeq[idx]===gameSeq[idx]){
            if(userSeq.length==gameSeq.length){
                setTimeout(levelUp,1000);
            }
        }else{
            h2.innerText=`game over press any key your score ${level-1}`;
            document.querySelector('body').style.backgroundColor='red';
            setTimeout(function(){
                document.querySelector('body').style.backgroundColor='white';
            },150);
            let h3 = document.querySelector('h3');
            let score = level-1;
            let newScore = 0;
            if(score>newScore){
                newScore=score;
                h3.innerText = `Highest Score ${score}`;
            }else if(newScore>score){
                h3.innerText = `Highest Score ${newScore}`;
            }
           

            level =0;
            gameSeq=[];
            started=false;
        }   
    }
function btnPress(){
    let btn = this;
    userInp(btn);

    let userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll('.box');
for(btns of allBtns){
    btns.addEventListener('click',btnPress);
}

