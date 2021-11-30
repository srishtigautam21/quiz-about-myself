var readlineSync=require('readline-sync');
var username=readlineSync.question("May I have your name: ");
console.log('Welcome '+ username + ' to do you know me game '+'!');
 var score=0;
var useranswer=readlineSync.question('Is my age 22? \n');
if(useranswer==='yes')
{
  console.log('right!');
  score+=1;

}
else{
  console.log('wrong! '+'My age is 22!!');
}
console.log('---------------------------------------')
//ex06

var usercity=readlineSync.question('Is my hometown patna?(answer in yes or no) \n');
if(usercity==='yes')
{
  console.log('right!');
  score+=1;

}
else
{
  console.log('wrong!');
}
console.log('---------------------------------------')
var sis=readlineSync.question('Do I have a sister or brother?\n') 
if(sis==='sister')
{
  console.log('right!');
  score+=1;
}
else{
  console.log('wrong!')
}
console.log('---------------------------------------')
var usercity=readlineSync.question('Where did I do my schooling from?(ramjas or DPS) \n');
if(usercity==='ramjas')
{
  console.log('right!');
  score+=1;

}
else
{
  console.log('wrong!');
}
console.log('-------------------------------------------')
var usercity=readlineSync.question('Whats my college name?(Jamia Hamdard or Jamia Milia) \n');
if(usercity==='Jamia Hamdard')
{
  console.log('right!');
  score+=1;

}
else
{
  console.log('wrong!');
}
console.log('-------------------------------------------')

console.log("Your final score is : ",score);
console.log("Highest scorer:Mansi")

// ex07
/*
// ex08
function family(question,answer)
{
  var useranswer=readlineSync.question(question);
  if(useranswer===answer)
  {
    console.log("You are right!");
    score+=1
  }
  else{
    console.log("You are wrong!");
    score-=1;
  }
  return score;
}
console.log("Updated score : ",family("Do I have a sister? ","yes"));
*/
