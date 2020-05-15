let val=document.getElementById("val");
let ans=val.innerHTML;
let v=Number(ans);
let circle=document.getElementById("circle");
let value=440-(440*v)/100;
let final=Number(value);
let text=document.getElementsByTagName("text");

circle.style.strokeDashoffset=value;

let comment=["It's likely, the chances of the spark going are pretty slim. Love Guru thinks that this relationship has a very good chance of being successful, but this doesn't mean that you don't have to work on the relationship. Remember that every relationship needs spending time together, talking with each other etc.","For you guys, Love is just a word, it’s a definition you guys give each other.","Stay away from candles - your relationship is hot enough already!","At the touch of each other’s love both of you are becoming a poet.","You guys chose each other. And will choose each other over and over and over. Without pause, without a doubt, in a heartbeat. Lucky guys!!","You both are two people in love, alone, isolated from the world, that’s beautiful!","The greatest happiness of your life will be the conviction that you guys are in love!!","Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. You guys are blessed with both!!","To be brave is to love unconditionally without expecting anything in return. You guys need to put a little effort in your relation. The nature will conspire, then!!","At the touch of each other’s love both of you are becoming a poet.","For you guys, one’s heart is, and always will be for the other."];
let len=comment.length;
let random=getRandomInt(len);

let com=document.getElementById("comment");
com.innerText=comment[random];
console.log(comment[random]);


  






function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }