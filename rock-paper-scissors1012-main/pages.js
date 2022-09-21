
    playerchoice =  "";


window.onload = function()
{
    winlose();
    
}
function rpc(pchoice){
     playerchoice = pchoice;
     document.getElementById("playerselection").src="images/"+playerchoice+".png";
     return playerchoice;
}

        function getName(){
         var pname = document.getElementById("playername").value
            localStorage.setItem("playername",pname);
        }

        const cscore = JSON.parse('compscore');
        const pscore = JSON.parse('playerscore');
        const cscore = JSON.parse('compMoney');
        const pscore = JSON.parse('playerMoney');
        document.getElementById("ccount").innerHTML+= cscore ;
        document.getElementById("pcount").innerHTML+= pscore;
        document.getElementById("cmoney").innerHTML+= cmoney ;
        document.getElementById("pmoney").innerHTML+= pmoney;
        document.getElementById("playname").innerHTML= pname;

        const obj = JSON.parse('win');
        function winloseF(){
            if (obj)
            {
                document.getElementById("message").innerHTML= "Yay you won";
            }
            else if (!obj){
                document.getElementById("message").innerHTML= "Better luck next time";
            }
            else if (cscore==pscore){
                document.getElementById("message").innerHTML= "It's a tie";
            }
            localStorage.setItem("compscore",0);
            localStorage.setItem("playerscore",0);
            localStorage.setItem("playername","");
        }


        //TIMER
        var sec = 0;
        function pad ( val ) { return val > 9 ? val : "0" + val; }
        setInterval( function(){
            $("#seconds").html(pad(++sec%60));
            $("#minutes").html(pad(parseInt(sec/60,10)));
        }, 1000);
