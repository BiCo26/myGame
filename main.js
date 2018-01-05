
var userSelection = 0;
var pcSelection = 0;
var myWeapon=['./assets/weapon1.gif','./assets/weapon2.gif','./assets/weapon3.gif']; //declare the empty array - that will be loaded via the while loop below
var slideIndex= 1;
var p=0;
var userWin = false;
var pcWin = false;
var userScore = 0;
var pcScore = 0;
var rock = 0;
var paper = 1;
var scissors = 2;


window.onload = function() { // load buttons

    document.getElementById('w1').addEventListener('click', function(){//call setInterval func() here
     userSelection =rock; 
     //pc display func()
     slotMachine();
    });

    document.getElementById('w2').addEventListener('click', function(){
    userSelection = paper; slotMachine();
    });

    document.getElementById('w3').addEventListener('click', function(){
     userSelection = scissors; slotMachine();
   

    });
}//close onload
    
    
//countdown SLIDESHOW  &&randomizer

function slotMachine() { 
    let image0;
    let image1;
    var slideIndex=0;
    var setInt = setInterval (showWeapons, 100);  //setInterval- calls the function showWeapons & sets the auto - to 1 seconds

    function showWeapons(){ 

    
        if(slideIndex <= 25 ){
            image0 = Math.floor(Math.random()*3); //left user display
            image1 = Math.floor(Math.random()*3); //right pc display
            pcSelection=image1;
            document.getElementById('userDisplay').style["background-image"]=`url('${myWeapon[image0]}')`
            document.getElementById('pcDisplay').style["background-image"]=`url('${myWeapon[image1]}')`
            slideIndex++;
        }
        else {
            clearInterval(setInt);
            document.getElementById('userDisplay').style["background-image"]=`url('${myWeapon[userSelection]}')`;            
            
            setTimeout(checkWinner,2800)  
        }
    
}

}

//Arra y : 0=rock ; 1=paper; 2=scissors

function checkWinner(){

    if (userSelection == pcSelection ){
        alert('ITS A TIE PLAY AGIAN!')
    
    
    } else if (userSelection == rock && pcSelection == paper){
        userWin = false;
        pcWin = true;
        confirm("YOU LOSE!!!")  
    
    } else if (userSelection == rock && pcSelection == scissors){
        userWin = true;
        pcWin = false;
        confirm("YOU WIN!!!")
    
    } else if (userSelection == paper && pcSelection == rock){
        userWin = true;
        pcWin = false;
        confirm("YOU WIN !!!")
    
    } else if (userSelection == paper && pcSelection == scissors){
        userWin = false;
        pcWin = true;
        confirm("YOU LOSE !!!")
    
    } else if (userSelection == scissors && pcSelection == rock){
        userWin = false;
        pcWin = true;
        confirm("YOU LOSE !!!")
    
    } else if (userSelection == scissors && pcSelection == paper){
        userWin = false;
        pcWin = true;
        confirm("YOU WIN !!!")

    }
    
    //SCORE looged via innerText to score div

    if (userWin ==true && pcWin == false) {
        //future usage: localStorage.setItem('userScore',userScore); //add USERS win to local storage
        userScore++;
        
        document.getElementById('userScore').innerText= (userScore);
    }
    if (pcWin == true && userWin == false){
         //localStorage.setItem('pcScore',pcScore); //add USERS win to local storage
        pcScore++;
        document.getElementById('pcScore').innerText= (pcScore);
    }

////FIRST TO 3 WINS

   if (userScore == 3){
       alert("YOU WON THE MATCH!")
        userScore = 0;
        pcScore = 0;
        
        document.getElementById('pcScore').innerText= "0";
        document.getElementById('userScore').innerText= "0";
    }
   if (pcScore == 3){
       alert("You Lost the Match")
       userScore = 0;
        pcScore = 0; 

        document.getElementById('pcScore').innerText= "0";
        document.getElementById('userScore').innerText= "0";
    }

    if(confirm('PLAY AGAIN!') == true) {
        document.getElementById('userDisplay').style["background-image"]=`url('./assets/display.gif')`
        document.getElementById('pcDisplay').style["background-image"]=`url('./assets/display.gif')`
        
        userSelection = 0;
        pcSelection = 0;
        slideIndex= 1;
        p=0;
        userWin = false;
        pcWin = false;
        
        
    }
}


