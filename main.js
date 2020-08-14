




function bt_click()
{
  document.getElementsByTagName("img")[0].classList.add(".paused");
// if(document.getElementById("startGame").innerHTML=="start")
  console.log(event.srcElement.id);
  var userButton=  event.srcElement.id;
  console.log("You: "+userButton);
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
  console.log("pc: "+p2choice);

// change hand image
var str="assets/"
document.getElementById("player1Hand").src=str+userButton+".png";
document.getElementById("player2Hand").src=str+p2choice+".png";




//check score
  var getScore1=document.getElementById("score1");
  console.log("Score1="+getScore1.innerHTML);

  var getScore2=document.getElementById("score2");
if(userButton.localeCompare(p2choice)==0)
{
  document.getElementById("result").innerHTML="tie";
}

  if(userButton=="rock" && p2choice=="paper")
  {
    getScore2.innerHTML=++getScore2.innerHTML;
    document.getElementById("result").innerHTML="You Lose";
    console.log("you lose");
  }
  else if(userButton=="rock" && p2choice=="scissor")
  {
    getScore1.innerHTML=++getScore1.innerHTML;
    document.getElementById("result").innerHTML="You Win";
    console.log("you win");
  }
  else if(userButton=="paper" && p2choice=="scissor")
  {
    getScore2.innerHTML=++getScore2.innerHTML;
    document.getElementById("result").innerHTML="You Lose";
    console.log("you lose");
  }
  else if(userButton=="paper" && p2choice=="rock")
  {
    getScore1.innerHTML=++getScore1.innerHTML;
    document.getElementById("result").innerHTML="You Win";
    console.log("you win");
  }

  else if( userButton=="scissor" && p2choice=="rock")
  {
    getScore2.innerHTML=++getScore2.innerHTML;
    document.getElementById("result").innerHTML="You Lose";
    console.log("you lose");
  }

  else if(userButton=="scissor" && p2choice=="paper")
  {
    getScore1.innerHTML=++getScore1.innerHTML;
    document.getElementById("result").innerHTML="You Win";
    console.log("you win");
  }


  setTimeout(function(){document.getElementById("player1Hand").src="assets/hand.png"  }, 1200);
  setTimeout(function(){document.getElementById("player2Hand").src="assets/hand.png"  }, 1200);
  setTimeout(function(){document.getElementsByTagName("img")[0].classList.remove(".paused")},1200);
  document.getElementsByClassName("modal")[0].style.display="block";
  setTimeout(function(){document.getElementsByClassName("modal")[0].style.display="none" },1700);

}
