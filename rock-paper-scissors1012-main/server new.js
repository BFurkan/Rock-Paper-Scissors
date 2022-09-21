   var playercount=0;
   var computercount=0;

//var url = "http://localhost:3000/post";



window.onload = function()
{
    winlose();
    
}

function play(){ 
    computer =  computerchoice(); 
    document.getElementById("computerselection").src="images/"+computer+".png";
    document.getElementById("playname").innerHTML=localStorage.getItem("playername");
    if(playerchoice == computer){
        document.getElementById("pcount").innerHTML= playercount;
        document.getElementById("ccount").innerHTML= computercount;
    }
    else if(playerchoice == "rock" && computer == "scissors"){
        //change scoreboard to add 1 for player
        
        document.getElementById("pcount").innerHTML= ++playercount;
    }
    else if(playerchoice == "rock" && computer == "paper"){
        ///change scoreboard to add 1 for computer
        
        document.getElementById("ccount").innerHTML= ++computercount;
    }
    else if(playerchoice == "scissors" && computer == "rock"){
        ///change scoreboard to add 1 for computer
        
        document.getElementById("ccount").innerHTML= ++computercount;
    }
    else if(playerchoice == "paper" && computer == "rock"){
        //change scoreboard to add 1 for player
       
        document.getElementById("pcount").innerHTML= ++playercount;
    }
    else if(playerchoice == "scissors" && computer == "paper"){
        ///change scoreboard to add 1 for player
       
        document.getElementById("pcount").innerHTML= ++playercount;
    }
    else if(playerchoice == "paper" && computer == "scissors"){
        ///change scoreboard to add 1 for computer
       
        document.getElementById("ccount").innerHTML= ++computercount;
    }
    localStorage.setItem("compscore",computercount);
    localStorage.setItem("playerscore",playercount);

    
    
}

function computerchoice(){
    var choice = Math.floor((Math.random() * 3) + 1);
    switch (choice) {
        case 1:
            choice = "rock"
            break;
        case 2:
            choice = "paper"
            break;
        case 3:
            choice = "scissors"
            break;
        default:
            text = "Error in computer choice";
        }
          return choice;
}
pmoney = 100;
cmoney = 100;
function betmode(){
    
    if(playerchoice == computer){
        pmoney = 100;
        cmoney = 100;
        document.getElementById("pmoney").innerHTML= pmoney;
        document.getElementById("cmoney").innerHTML= cmoney;
    }
    else if(playerchoice == "rock" && computer == "scissors"){
        //change scoreboard to add 1 for player
        pmmoney += 10;
        cmoney -=10;
        document.getElementById("pmoney").innerHTML= pmoney;
        document.getElementById("cmoney").innerHTML= cmoney;
    }
    else if(playerchoice == "rock" && computer == "paper"){
        ///change scoreboard to add 1 for computer
        pmmoney -= 10;
        cmoney +=10
        document.getElementById("pmoney").innerHTML= pmoney;
        document.getElementById("cmoney").innerHTML= cmoney;
    }
    else if(playerchoice == "scissors" && computer == "rock"){
        ///change scoreboard to add 1 for computer
        pmmoney -= 10;
        cmoney +=10
        document.getElementById("pmoney").innerHTML= pmoney;
        document.getElementById("cmoney").innerHTML= cmoney;
    }
    else if(playerchoice == "paper" && computer == "rock"){
        //change scoreboard to add 1 for player
        pmmoney += 10;
        cmoney -=10
        document.getElementById("pmoney").innerHTML= pmoney;
        document.getElementById("cmoney").innerHTML= cmoney;
    }
    else if(playerchoice == "scissors" && computer == "paper"){
        ///change scoreboard to add 1 for player
        pmmoney += 10;
        cmoney -=10
        document.getElementById("pmoney").innerHTML= pmoney + 10;
        document.getElementById("cmoney").innerHTML= cmoney - 10;
    }
    else if(playerchoice == "paper" && computer == "scissors"){
        ///change scoreboard to add 1 for computer
        pmmoney -= 10;
        cmoney +=10
        document.getElementById("pmoney").innerHTML= pmoney - 10;
        document.getElementById("cmoney").innerHTML= cmoney + 10;
    }
    localStorage.setItem("compMoney",cmoney);
    localStorage.setItem("playerMoney",pmoney);
    
}
var win = false;
if (playercount>computercount) win = true;    
else if (playercount<computercount) win = false

            

            var jsontext = JSON.stringify({
                'win' : win,
                'compscore' : computercount,
                'playerscore' : playercount,
                'compMoney' : cmoney,
                'playerMoney': pmoney
            });
            console.log(jsontext);
            res.send(jsontext);
        
