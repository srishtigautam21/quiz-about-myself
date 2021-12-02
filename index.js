var readlineSync=require('readline-sync');
var username=readlineSync.question("May I have your name: ");
console.log('Welcome '+ username + ' To do you know me game'+'!!');
 var score=0;
var useranswer=readlineSync.question('Is my age 22?(answer in yes or no) \n');
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
  console.log('wrong! '+'My hometown is patna!!');
}
console.log('---------------------------------------')
var sis=readlineSync.question('Do I have a sister or brother?\n') 
if(sis==='sister')
{
  console.log('right!');
  score+=1;
}
else{
  console.log('wrong! '+'I have a sister.')
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
  console.log('wrong! '+ 'I studied in ramjas.');
}
console.log('-------------------------------------------')
var usercity=readlineSync.question('Whats my college name?(jamia hamdard or jamia milia) \n');
if(usercity==='jamia hamdard')
{
  console.log('right!');
  score+=1;

}
else
{
  console.log('wrong! '+ 'My college is jamia hamdard.');
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
