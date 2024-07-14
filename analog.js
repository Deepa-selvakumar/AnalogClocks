const hour=document.querySelector('.hrs');
const minute=document.querySelector('.min');
const second=document.querySelector('.sec');

setInterval(runClock,1000);//repeatedly at intervals of 1000 milliseconds (1 second)  clock hands are updated every second..

function runClock(){
  const time=new Date();//representing the current time.
  const sec=time.getSeconds()/60;// calculates the fraction of seconds that have passed in the current minute. 
  const min=(sec+time.getMinutes())/60;
  const hrs=(min+time.getHours())/12;
  hour.style.setProperty('--rotation',hrs*360);
  minute.style.setProperty('--rotation',min*360);
  second.style.setProperty('--rotation',sec*360);

}

runClock();