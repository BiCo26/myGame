console.log('this $41T works!');


    
    var userSelection = '';
    var pcSelection = Math.random();
	var myWeapon=['./assets/weapon1.gif','./assets/weapon2.gif','./assets/weapon3.gif']; //declare the empty array - that will be loaded via the while loop below
    var slideIndex= 1;
    var p=0;
	alert(myWeapon);


window.onload = function() { //append to DISPLAY > load buttons
//5
//PLACEMENT? below buttons?

    if ( userSelection == myWeapon[0]) {
       
        display = document.getElementById('w1'); //APPEND >DISPLAY
        userSelection[0].append(display);
         //rock
    
    }else if (userSelection == myWeapon[1]) {
        display = document.getElementById('w2');
        userSelection[1].append(display);

    } else if (userSelection == myWeapon[2]){
        display = document.getElementById('w3');
        userSelection[2].append(display);
        
    }

    //PLACEMENT?
    //retrieves pix from array ^^ && assigns 2 img tag to DISPLAY
        

    //1

    document.getElementById('w1').addEventListener('click', function(){//call setInterval func() here
     userSelection =0; alert(1);
     document.getElementById('userDisplay').style["background-image"]=`url('${myWeapon[userSelection]}')`
    });

    document.getElementById('w2').addEventListener('click', function(){
    userSelection = 1; alert(2);
    document.getElementById('userDisplay').style["background-image"]=`url('${myWeapon[userSelection]}')`
    });

    document.getElementById('w3').addEventListener('click', function(){
     userSelection = 2; alert("");
    // document.getElementById('userDisplay').style["background-image"]=`url('assets/weapon2.gif')`
    document.getElementById('userDisplay').style["background-image"]=`url('${myWeapon[userSelection]}')`
    //  #userDisplay.background=myWeapon[userSelection]

    });
}//close onload

//2
    
    


		function slotMachine() { //counter for next pic

			var slideIndex=0;
            
            var setInt = setInterval (showDivs, 300);  //setInterval- calls the function showWeapons & sets the auto - to 3 seconds
	
            function showWeapons(){ 

                let image0 = Math.floor(Math.random()*3);
                let image = Math.floor(Math.random()*3);
                if(slideIndex === 15 ){
                    document.getElementById('userDisplay').style["background-image"]=`url('${myWeapon[image]}')`
                }
                // myWeapons
               
                // slideIndex++;
            
            }
        }

    //Arra y : 0=rock ; 1=paper; 2=scissors
//3

var rock = userSelection[0];
var paper = [1];
var scissors = [2];

if (userSelection == rock && pcSelection == rock){
    win != true;
    alert("TIE!!!")
}
else if (userSelection == paper && pcSelection == paper){
    win != true;
    alert("TIE!!!")
}
else if (userSelection == scissors && pcSelection == scissors){
    win != true;
    alert("TIE!!!")
}
else if (userSelection == paper && pcSelection == paper){
    win != true;
    alert("TIE!!!")
}
//USER possibilities
else if (userSelection == rock && pcSelection == paper){
    win != false;
    alert("You Lost!!!")
}
else if (userSelection == rock && pcSelection == scissors){
    win != true;
    alert("You Win!!!")
}
else if (userSelection == paper && pcSelection == rock){
    win != true;
    alert("TIE!!!")
}

//PC IF STATEMENT to 'validate' randomizer


//4
//Math.random()???

function pcRandomizer(myWeapon){
        
       myWeapon.forEach(
            function(elem,i,myWeapon){

                var newIndex= Math.floor(Math.random()* myWeapon.length);
                var elem2=myWeapon[newIndex];
                myWeapon[newIndex]=elem;
                myWeapon[i]=elem2;
            }
        );
        console.log(myWeapon);

       return myWeapon;
    }


pcRandomizer([1,0,3])