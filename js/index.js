
let button = document.querySelector('.button');
let time = 60;
let score = 0;
 document.querySelector('#score').textContent = `Your score: ${score}`;
button.addEventListener('click',function(){
  score++;
  document.querySelector('#score').textContent = `Your score: ${score}`;
  let topPosition = Math.round(Math.random()*90);
  let leftPosition = Math.round(Math.random()*80);
  button.style.top = `${topPosition}%`;
  button.style.left = `${leftPosition}%`;
});

const timer = setInterval(function(){
  document.querySelector('#time').textContent=`Time left: ${time}`
   time --
   if(time==0){
    clearInterval(timer);
    button.disabled='true';
    document.querySelector('#time').textContent=`Time left: ${time}`
   }
},1000);




