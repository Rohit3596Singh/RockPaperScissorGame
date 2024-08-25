// stone - 0
// paper - 1
// scissor - 2

// oc = window.location.href = "result.html"
let random = Math.floor(Math.random() * 3);
console.log(random);
const zero = document.getElementById("stone");
const one = document.getElementById("paper");
const two = document.getElementById("scissor");
const openBtn = document.getElementById("rules");
const closeBtn = document.getElementById("close");
const yourScoreDisplay = document.querySelector(".yourScore");
const computerScoreDisplay = document.querySelector(".computerScore");


// const stone = document.createElement("img");
// img.src="./assets/icons8-fist-67 1";
// document.body.appendChild(img);

let yourScore = localStorage.getItem("yourScore") ? parseInt(localStorage.getItem("yourScore")) : 0;
let computerScore = localStorage.getItem("computerScore") ? parseInt(localStorage.getItem("computerScore")) : 0;
// let yourScore=0;
// let computerScore=0;

function updateScoreDisplay(){
    computerScoreDisplay.value=computerScore;
    yourScoreDisplay.value=yourScore;
    console.log("displayScorre")
}

function saveScoresToLocalStorage() {
    localStorage.setItem("yourScore", yourScore);
    localStorage.setItem("computerScore", computerScore);
}

updateScoreDisplay();

zero.addEventListener("click",()=>{
    // switch(random){
    //     case random:
            if(random===1){
                console.log("you loose")
                window.location.href="youLost.html";
                computerScore++;

                // input.textContent=computerScore;
                // .value=computerScore;
                
                console.log(computerScore);
                
            }
            else if(random===2){
                console.log("win");
                window.location.href="youWin.html";
                yourScore++;
                // localStorage.setItem("username",e,target.value);
                // input.textContent=yourScore;
                // computerScoreDisplay.value=computerScore;

            }
            else{
                console.log("draw");
                window.location.href="tieUp.html";
            }

                saveScoresToLocalStorage(); // Save updated scores
    updateScoreDisplay(); // Update displayed scores

        //     console.log("draw");
        //     break;
        // case 1:
        //     console.log("You Loose");
        //     break;
        // case 2:
        //     console.log("You win");
        //     break;
    
});
one.addEventListener("click",()=>{
    if(random===1){
        console.log("Draw");
        window.location.href="tieUp.html";
    }
    else if(random===2){
        console.log("loose");
        window.location.href="youLost.html";
        computerScore++;
        // input.textContent=computerScore;
        // input.value=computerScore;

    }
    else{
        console.log("win")
        window.location.href="youWin.html";
        yourScore++;
        // input.textContent=yourScore;

    }
        saveScoresToLocalStorage(); // Save updated scores
    updateScoreDisplay(); // Update displayed scores
    // switch(one){
    //     case 0:
    //         console.log("You Win");
    //         break;
    //     case 1:
    //         console.log("Draw");
    //         break;
    //     case 2:
    //         console.log("You Loose");
    //         break;
    // }
});
two.addEventListener("click",()=>{
    if(random===1){
        console.log("you win")
        window.location.href="youWin.html";
        yourScore++;
        // input.textContent=yourScore;
    }
    else if(random===2){
        console.log("Draw")
        window.location.href="tieUp.html";
    }
    else{
        console.log("loose")
        window.location.href="youLost.html";
        computerScore++;
        // input.textContent=computerScore;

    }
        saveScoresToLocalStorage(); // Save updated scores
    updateScoreDisplay(); // Update displayed scores
    // switch(two){
    //     case 0:
    //         console.log("You Loose");
    //         break;
    //     case 1:
    //         console.log("You Win");
    //         break;
    //     case 2:
    //         console.log("Draw");
    //         break;
    // }
});

// openBtn.addEventListener("click",()=>{
//     document.getElementById("box-popup").style.display="block";


// })
// closeBtn.addEventListener("click",()=>{
//     document.getElementById("box-popup").style.display="none";
// })


function openForm(){
    document.getElementById("box-popup").style.display="block";
}

function closeForm(){
    document.getElementById("box-popup").style.display="none";
}

function openFormCelebration(){
    document.getElementById("box-popup-celebration").style.display="block";
}

function closeFormCelebration(){
    document.getElementById("box-popup-celebration").style.display="none";
}
