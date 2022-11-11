

//PLAYER SAITAMA

let atkBtn1 = document.querySelector("#p1Atk");
atkBtn1.addEventListener("click", atkPlayer2);
let basep2HP = 500;
let baseWidth2 = "100%";



function atkPlayer2() {
    let damageP2 = Math.ceil(Math.random()*5);
    console.log(damageP2);
    let atkDisplay = document.querySelector("#atkDisplay");

    //p2HP current HP
    let p2HP = document.querySelector("#p2HPDisplay");

    //display Winner!!
    let winp1 = document.querySelector("#winner");

    //hp bar
    let hpBorder2 = document.querySelector(".hpBorder2");
    let hpFill2 = document.querySelector(".hpFill2");
    // console.log(hpFill);

    
    atkBtn1.style ="display:none;"
    atkBtn2.style = "display:block"

    if (damageP2 == 1) {
        atkDisplay.textContent = "MISS!!";
        winp1.src="image/all might dodge.gif";

    }
    
    if (damageP2 == 2) {
        atkDisplay.textContent = "NORMAL PUNCH!! -10"
        newp2HP = basep2HP - 10;
        basep2HP = newp2HP;
        console.log(Math.round(newp2HP));
        p2HP.textContent = (Math.round(newp2HP)); 
        winp1.src= "image/saitama atk 1.gif";
        
        hpFill2.style.height = "100%";
        hpFill2.style.transitionDuration = "2s";
        let newWidth =(basep2HP/5) + "%";
        let newHPFill2 = document.querySelector(".hpFill2");
        newHPFill2.style.width = newWidth;
        baseWidth2 = newWidth;
        console.log(baseWidth2);
        hpFill2 = newHPFill2.innerHTML;       
        
    }

    if (damageP2 == 3) {
        atkDisplay.textContent = "CONSECUTIVE NORMAL PUNCHES!! -25"
        newp2HP = basep2HP - 25;
        basep2HP = newp2HP;
        console.log(Math.round(newp2HP));
        p2HP.textContent = (Math.round(newp2HP));
        winp1.src= "image/saitama atk 4.gif";

        hpFill2.style.height = "100%";
        hpFill2.style.transitionDuration = "2s";
        let newWidth =(basep2HP/5) + "%";
        let newHPFill2 = document.querySelector(".hpFill2");
        newHPFill2.style.width = newWidth;
        baseWidth2 = newWidth;
        console.log(baseWidth2);
        hpFill2 = newHPFill2.innerHTML;  
    }

    if (damageP2 == 4 ) {
        atkDisplay.textContent = "KILLER MOVE: SERIOUS PUNCH!! -50"
        newp2HP = basep2HP - 50;
        basep2HP = newp2HP;
        console.log(Math.round(newp2HP));
        p2HP.textContent = (Math.round(newp2HP));
        winp1.src= "image/saitama serious punch.gif";

        hpFill2.style.height = "100%";
        hpFill2.style.transitionDuration = "2s";
        let newWidth =(basep2HP/5) + "%";
        let newHPFill2 = document.querySelector(".hpFill2");
        newHPFill2.style.width = newWidth;
        baseWidth2 = newWidth;
        console.log(baseWidth2);
        hpFill2 = newHPFill2.innerHTML;  
    
    }
    
    if (damageP2 == 5 ) {
        atkDisplay.textContent =  "KILLER MOVE:SERIOUS SERIES - GROIN PUNCH!! -100"
        newp2HP = basep2HP - 100;
        basep2HP = newp2HP;
        console.log(Math.round(newp2HP));
        p2HP.textContent = (Math.round(newp2HP));
        winp1.src="image/saitama ulti groin punch.gif";

        hpFill2.style.height = "100%";
        hpFill2.style.transitionDuration = "2s";
        let newWidth =(basep2HP/5) + "%";
        let newHPFill2 = document.querySelector(".hpFill2");
        newHPFill2.style.width = newWidth;
        baseWidth2 = newWidth;
        console.log(baseWidth2);
        hpFill2 = newHPFill2.innerHTML;  

    }
    
    if ( basep2HP <= 0) {

        console.log("YOU WIN");
        // atkBtn1.style ="display:none;"
        atkBtn2.style ="display:none;"
        atkDisplay.textContent = "SAITAMA WIN";
        p2HP.textContent = "LOST"
        winp1.src="image/saitamagif.gif" 

        hpBorder2.remove(hpFill2);


        
        // atkBtn2.setAttribute("disabled","");
    }
    // atkBtn1.setAttribute("disabled", "");
    // atkBtn2.removeAttribute("disabled", "");

}

//PLAYER 2 

let atkBtn2 = document.querySelector("#p2Atk");
atkBtn2.addEventListener("click", atkPlayer1);
let basep1HP = 500;
let baseWidth1 = "100%";

function atkPlayer1() {
    let damageP1 = Math.ceil(Math.random()*5);
    console.log(damageP1);
    let atkDisplay = document.querySelector("#atkDisplay");
    //p2HP current HP
    let p1HP = document.querySelector("#p1HPDisplay");
    let newp1HP = document.querySelector("#newp1HPDisplay");
    let winp2 = document.querySelector("#winner");

    //hp bar
    let hpBorder1 = document.querySelector(".hpBorder1");
    let hpFill1 = document.querySelector(".hpFill1");
    // console.log(hpFill);

    atkBtn2.style ="display:none;"
    atkBtn1.style = "display:block"

    if (damageP1 == 1) {
        atkDisplay.textContent = "MISS!!";
        winp2.src="image/saitama dodge.gif";
    }
    
    if (damageP1 == 2) {
        atkDisplay.textContent = "TEXAS SMASH!! -10"
        newp1HP = basep1HP - 10;
        basep1HP = newp1HP;
        console.log(Math.round(newp1HP));
        p1HP.textContent = (Math.round(newp1HP));
        winp2.src="image/all might atk 3.gif";  

        hpFill1.style.height = "100%";
        hpFill1.style.transitionDuration = "2s";
        let newWidth =(basep1HP/5) + "%";
        let newHPFill1 = document.querySelector(".hpFill1");
        newHPFill1.style.width = newWidth;
        baseWidth1 = newWidth;
        console.log(baseWidth1);
        hpFill1 = newHPFill1.innerHTML;    
    }

    if (damageP1 == 3) {
        atkDisplay.textContent = "DETROIT SMAAASHHH!! -25"
        newp1HP = basep1HP - 25;
        basep1HP = newp1HP;
        console.log(Math.round(newp1HP));
        p1HP.textContent = (Math.round(newp1HP));
        winp2.src="image/all might atk2.gif" ;

        hpFill1.style.height = "100%";
        hpFill1.style.transitionDuration = "2s";
        let newWidth =(basep1HP/5) + "%";
        let newHPFill1 = document.querySelector(".hpFill1");
        newHPFill1.style.width = newWidth;
        baseWidth1 = newWidth;
        console.log(baseWidth1);
        hpFill1 = newHPFill1.innerHTML;  
    }

    if (damageP1 == 4 ) {
        atkDisplay.textContent = "NEW HAMPSHIRE SMAASSHH!! -50"
        newp1HP = basep1HP - 50;
        basep1HP = newp1HP;
        console.log(Math.round(newp1HP));
        p1HP.textContent = (Math.round(newp1HP));
        winp2.src="image/all might atk 4.gif";

        hpFill1.style.height = "100%";
        hpFill1.style.transitionDuration = "2s";
        let newWidth =(basep1HP/5) + "%";
        let newHPFill1 = document.querySelector(".hpFill1");
        newHPFill1.style.width = newWidth;
        baseWidth1 = newWidth;
        console.log(baseWidth2);
        hpFill1 = newHPFill1.innerHTML;  
    }
    
    if (damageP1 == 5 ) {
        atkDisplay.textContent =  "UNITED STATES OF SMAAASSHHH!! -100"
        newp1HP = basep1HP - 100;
        basep1HP = newp1HP;
        console.log(Math.round(newp1HP));
        p1HP.textContent = (Math.round(newp1HP));
        winp2.src="image/all might ulti.gif";

        hpFill1.style.height = "100%";
        hpFill1.style.transitionDuration = "2s";
        let newWidth =(basep1HP/5) + "%";
        let newHPFill1 = document.querySelector(".hpFill1");
        newHPFill1.style.width = newWidth;
        baseWidth1 = newWidth;
        console.log(baseWidth2);
        hpFill1 = newHPFill1.innerHTML;  
    }
    
    if ( basep1HP <= 0) {

        console.log("YOU WIN");  
        atkBtn1.style ="display:none;"
        // atkBtn2.style ="display:none;"
        atkDisplay.textContent = "ALL MIGHT WIN";
        p1HP.textContent = "LOST!!"
        winp2.src="image/allmightgif1.gif" 
        

        hpBorder1.remove(hpFill1);
        // atkBtn1.setAttribute("disabled","");
    }
    // atkBtn2.setAttribute("disabled", "");
    // atkBtn1.removeAttribute("disabled", "");

}