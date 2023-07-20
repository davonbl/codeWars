function catMouse(x){
    let getMouse = x.split('');
    let keepTrack = 0; 
    for(let i = 0; i < getMouse.length; i++){
      if(getMouse[i] === 'm' && keepTrack <= 3){
        return 'Caught!';
      }
      if(keepTrack > 3){
        return 'Escaped!';
      }
      if(i !== 0){
        keepTrack++; 
      }
    }
  }