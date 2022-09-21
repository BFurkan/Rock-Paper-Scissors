var playerchoice = "";
var playercount =0;
var computercount = 0;
//var url = "http://localhost:3000/post";



window.onload = function()
{
    winlose();
   
}
function rpc(pchoice){
     playerchoice =pchoice;
     document.getElementById("playerselection").src="images/"+playerchoice+".png";
     return playerchoice;
}

function play(){
    
    
    var computer =  computerchoice(); 
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
       
        document.getElementById("pcount").innerHTML= ++playercount
    }
    else if(playerchoice == "scissors" && computer == "paper"){
        ///change scoreboard to add 1 for player
       
        document.getElementById("pcount").innerHTML= ++playercount
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

        function getName(){
         var pname = document.getElementById("playername").value
            localStorage.setItem("playername",pname);
        }
        function winlose(){
            computercount=localStorage.getItem("compscore");
            playercount=localStorage.getItem("playerscore");
            if (playercount>computercount)
            {
                document.getElementById("message").innerHTML= "Yay you won";
            }
            else if (playercount<computercount){
                document.getElementById("message").innerHTML= "Better luck next time";
            }
            else if (playercount==computercount){
                document.getElementById("message").innerHTML= "It's a tie";
            }
            localStorage.setItem("compscore",0);
            localStorage.setItem("playerscore",0);
            localStorage.setItem("playername","");
        }
