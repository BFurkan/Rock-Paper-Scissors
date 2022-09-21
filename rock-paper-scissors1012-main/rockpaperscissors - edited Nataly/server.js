var playercount = 0;
var computercount = 0;
var pmoney = 100;
var cmoney = 100;	

var express = require('express');
var app = express();


app.post('/postc', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    /* console.log(JSON.parse(req.query['data'])); */
    var z = JSON.parse(req.query['data']);

    pmoney = z['pmoney'];
    cmoney = z['cmoney'];
    playercount = z['playercount'];
    computercount = z['computercount'];
    res.send(JSON.stringify({ 'msg': winloseF(playercount, computercount) }));
   
})
app.post('/postm', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    /* console.log(JSON.parse(req.query['data'])); */
    var z = JSON.parse(req.query['data']);

    pmoney = z['pmoney'];
    cmoney = z['cmoney'];
    playercount = z['playercount'];
    computercount = z['computercount'];
    res.send(JSON.stringify({ 'msg': winloseF(pmoney, cmoney) }));
   
})
app.listen(3000, () => {} /*the port number this server listens to*/);
console.log("Server is running!");

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
}

