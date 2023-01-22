const input = document.querySelector('#duration');
const playBtn = document.querySelector('#start')
const pauseBtn = document.querySelector('#pause')
const circle = document.querySelector('circle')

let perimeter = circle.getAttribute('r')*2*Math.PI;
circle.setAttribute('stroke-dasharray',perimeter);

let duration;
const mytimer = new Timer(input,playBtn,pauseBtn,{
  onStart(totalDuration){
    console.log("TIMER STARTEDDDD");
    duration = totalDuration;
  },
  
  onTick(timerRemaining){
    console.log("ticking..")
   
    circle.style.strokeDashoffset = perimeter*timerRemaining/duration - perimeter;
    
  },
  onComplete(){
    console.log("COMPLETEEEEE")
  }
});



