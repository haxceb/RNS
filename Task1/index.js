const fs = require('fs');


const allData = fs.readFile("input.txt", "utf-8" ,(err, data)=>{
    if(err){
        throw err;
    }
    const line = data.split(/\r?\n/);
    console.log(line);

    var region = line[0].split(" ");
    var s = Number(region[0]);
    var t = Number(region[1]);

    var buildings = line[1].split(" ");
    var a = Number(buildings[0]);
    var b = Number(buildings[1]);

    var balls = line[2].split(" ");
    var m = Number(balls[0]);
    var n = Number(balls[1]);

    var redfalls = line[3].split(" ");
    var bluefalls = line[4].split(" ");

    var rb = 0;
    var bb = 0;

    redfalls.map((r)=>{
        if(Number(r) + a >= s && Number(r) + a <= t ){
            rb++;
        }
    })

    bluefalls.map((f)=>{
        if(Number(f)+ b >= s && Number(f) + b <=t){
            bb++;
        }
    })


    console.log("Red balls: ", rb);
    console.log("Blue balls: ", bb);

})