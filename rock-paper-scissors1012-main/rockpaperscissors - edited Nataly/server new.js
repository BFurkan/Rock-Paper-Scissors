   var playercount=0;
   var computercount=0;

//var url = "http://localhost:3000/post";



/* window.onload = function()
{
    winlose();
    
} */
function classicMode(){
window.location = "page2.html#" + localStorage.getItem("username");
}
function betmode(){
window.location = "Betmode.html#" + localStorage.getItem("username");
}
function play(){ 
    computer =  computerchoice(); 
    document.getElementById("computerselection").src="images/"+computer+".png";
    /* alert(pname);
    document.getElementById("playname").innerHTML= document.getElementById("playername"); */
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
async function endgame2(){
    var dat = JSON.stringify({
        'pmoney': pmoney,
        'cmoney': cmoney,
        'playercount': playercount,
        'computercount': computercount
    })
    var res = await fetch("http://localhost:3000/postc?data="+ dat,{
        method: "POST"
    })
    var res2 = await res.json();
    window.location = "page3.html#" + res2.msg;
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
var pmoney = 100;
var cmoney = 100;


async function betmodeCalc(){  
    if(playerchoice == computer){
        pcmoney;
        cmoney;
    }
    else if(playerchoice == "rock" && computer == "scissors"){
        //change scoreboard to add 1 for player
        pmoney += 10;
        cmoney -=10;
    }
    else if(playerchoice == "rock" && computer == "paper"){
        ///change scoreboard to add 1 for computer
        pmoney -= 10;
        cmoney +=10;
    }
    else if(playerchoice == "scissors" && computer == "rock"){
        ///change scoreboard to add 1 for computer
        pmoney -= 10;
        cmoney +=10;
    }
    else if(playerchoice == "paper" && computer == "rock"){
        //change scoreboard to add 1 for player
        pmoney += 10;
        cmoney -=10;
    
    }
    else if(playerchoice == "scissors" && computer == "paper"){
        ///change scoreboard to add 1 for player
        pmoney += 10;
        cmoney -=10
    }
    else if(playerchoice == "paper" && computer == "scissors"){
        ///change scoreboard to add 1 for computer
        pmoney -= 10;
        cmoney +=10
    }
    document.getElementById("pmoney").innerHTML= pmoney;
    document.getElementById("cmoney").innerHTML= cmoney;
    localStorage.setItem("compMoney",cmoney);
    localStorage.setItem("playerMoney",pmoney);
    if (pmoney <= 0 || cmoney <= 0)
    {
        var dat = JSON.stringify({
            'pmoney': pmoney,
            'cmoney': cmoney,
            'playercount': playercount,
            'computercount': computercount
        })
        var res = await fetch("http://localhost:3000/postm?data="+ dat,{
            method: "POST"
        })
        var res2 = await res.json();
        /* window.location = "page3.html#" + winloseF(pmoney,cmoney)  */
        window.location = "page3.html#" + res2.msg; 
    }
}
async function endgame(){
    /* window.location = "page3.html#" + winloseF(pmoney,cmoney) */
    var dat = JSON.stringify({
        'pmoney': pmoney,
        'cmoney': cmoney,
        'playercount': playercount,
        'computercount': computercount
    })
    var res = await fetch("http://localhost:3000/postm?data="+ dat,{
        method: "POST"
    })
    var res2 = await res.json();

    window.location = "page3.html#" + res2.msg;
}
/* TO USE FILES, OPEN ENTIRE FOLDER, THEN OPEN A NEW TERMINAL AND RUN SERVER WITH NODE: node server.js AFTER THAT THEN
OPEN PAGE ONE OF PROGRAM AND YOU ARE GOOD TO GO*/
/* IF YOU WANT TO USE ONLY CLIENT SIDE, TAKE COMMENTS OUT FOR THIS FUNCTION AND COMMENT OUT LINES IN SOME FUNCTIONS OF ENDGAME!!!!!! 
function winloseF(playercount,computercount){
    if (playercount>computercount)
    {
        return "Yay you won";
    }
    else if (playercount<computercount){
        return "Better luck next time";
    }
    else if (playercount == computercount){
        return "It's a tie";
    }
} */
/* 
function winloseF(){
    if (playercount>computercount)
    {
        document.getElementById("message").innerHTML= "Yay you won";
    }
    else if (playercount<computercount){
        document.getElementById("message").innerHTML= "Better luck next time";
    }
    else if (playercount == computercount){
        document.getElementById("message").innerHTML= "It's a tie";
    }
} */

            /* var jsontext = JSON.stringify({
                'win' : win,
                'compscore' : computercount,
                'playerscore' : playercount,
                'compMoney' : cmoney,
                'playerMoney': pmoney
            });
            console.log(jsontext);
            res.send(jsontext); */
        
