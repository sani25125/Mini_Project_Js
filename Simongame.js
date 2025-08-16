let gamesque = [];
let usersque = [];
let btns = ["red", "green", "yellow", "blue"]
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("click", function () {
    if(started == false){
        console.log("Game Started");
        started = true;

        levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");    
    }, 250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");    
    }, 250);
}

function levelup(){
    usersque = [];
    level++;
    h2.innerText = ` Level ${level}`;
    let randidx = Math.floor(Math.random()*4);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    btnflash(randbtn);
    // console.log(randidx);
    // console.log(randcolor);
    // console.log(randbtn);
    gamesque.push(randcolor);
    console.log(gamesque);
}

function checkAns(idx){
    if(usersque[idx] == gamesque[idx]){
        if(usersque.length == gamesque.length){
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your Score Is <b>${level}</b>  <br>Press any key to start`;
        // document.querySelector("body").style.backgroundcolor = "red";
        // setTimeout(function(){
        //     document.querySelector("body").style.backgroundColor = "white"; 
        // },150)
        reset();
      }
}

function btnpress() {
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    usersque.push(usercolor);
    checkAns(usersque.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    usersque = [];
    gamesque = [];
    level = 0;
}