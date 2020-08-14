var flag=1;

function bt_click()
{
// if(document.getElementById("startGame").innerHTML=="start")
if(flag==0)
{
  console.log(event.srcElement.id);
  return event.srcElement.id;
}
else {
  alert("Pls start the game first");
}
}

var startButton = document.getElementById("startGame");
startButton.onclick = function(){
  if(startButton.innerHTML=="Start")
  {
    flag=0;
    startButton.innerHTML="Stop";
    console.log(startButton.innerHTML);
var userButton;

  userButton= bt_click();
    console.log(userButton);
    var ranNum = Math.floor((Math.random() * 3) + 1);
    var p2choice;
    console.log(ranNum);
    switch (ranNum) {
      case 1: p2choice="rock";
      break;
      case 2: p2choice="paper";
      break;
      case 3: p2choice="scissor";
        break;
      default:
    }
    console.log(p2choice);

    var getScore1=document.getElementById(score1);
    var getScore2=document.getElementById(score2);
  if(userButton.localeCompare(p2choice)==0)
    alert("tie");
    if(userButton=="rock" && p2choice=="paper")
    {
      getScore2.innerHTML=getScore2.innerHTML+1;
      console.log("you lose");
    }
    else if(userButton=="rock" && p2choice=="scissor")
    {
      getScore1.innerHTML=getScore1.innerHTML+1;
    }
    else if(userButton=="paper" && p2choice=="scissor")
    {
      getScore2.innerHTML=getScore2.innerHTML+1;
      console.log("you lose");
    }
    else if(userButton=="paper" && p2choice=="rock")
    {
      getScore1.innerHTML=getScore1.innerHTML+1;
    }

    else if( userButton=="scissor" && p2choice=="rock")
    {
      getScore2.innerHTML=getScore2.innerHTML+1;
      console.log("you lose");
    }

    else if(userButton=="scissor" && p2choice=="paper")
    {
      getScore1.innerHTML=getScore1.innerHTML+1;
    }
  }

    else {
      flag=1;
      startButton.innerHTML="Start";
    }


};
