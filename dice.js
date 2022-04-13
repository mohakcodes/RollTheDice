var randomno1 = Math.floor(Math.random()*6)+1;

var randomimage1 = "images/dice" + randomno1 + ".png";

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src" , randomimage1);



var randomno2 = Math.floor(Math.random()*6)+1;

var randomimage2 = "images/dice" + randomno2 + ".png";

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src" , randomimage2);


if(randomno1 > randomno2)
{
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS !";
}
else if(randomno2 > randomno1)
{
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS !";
}
else
{
    document.querySelector("h1").innerHTML = "MATCH DRAW";
}

