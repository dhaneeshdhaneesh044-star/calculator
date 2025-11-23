let play=document.getElementById("display")
let press=(value)=>{
   
        play.value+=value;
        
        
}
let cal=()=>{
    play.value=eval(  play.value);
      console.log(value);
}
  let display=()=>{
play.value=""
  }