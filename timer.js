
class Timer{
  constructor(durationInput, startBtn,pauseBtn,callbacks){
    this.durationInp = durationInput;
    this.startBtn = startBtn;
    this.pauseBtn = pauseBtn;
    this.borderLeft = Math.PI*90*2 % this.timeRemaining;
    this.border = Math.PI*90*2;
    if(callbacks){
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }
    
    this.startBtn.addEventListener('click',this.start);
    this.pauseBtn.addEventListener('click',this.pause);
    
  }
  start=()=>{
    if(this.onStart){
      this.onStart(this.timeRemaining);
    }
    this.tick();
    this.interval = setInterval(this.tick,10)
  }
  pause=()=>{
    clearInterval(this.interval)
  }
  onDurationChange= ()=>{

  }
  tick=()=>{
    if(this.timeRemaining<=0){
      this.pause();
      if(this.onComplete){
        this.onComplete();
      }
    }else{
    this.timeRemain = this.timeRemaining - 0.01;
    if(this.onTick){
      this.onTick(this.timeRemaining);
    }
    }
}
  get timeRemaining(){
    return parseFloat(this.durationInp.value);
  }
  set timeRemain(time){
    this.durationInp.value = time.toFixed(2);
  }
}