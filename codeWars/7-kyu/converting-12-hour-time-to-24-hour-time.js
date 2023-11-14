function to24hourtime(hour, minute, period) {
    let time;
    let min = minute.toString();
    if(period === 'pm'){
      hour !== 12? time = hour + 12 : time = hour;
    }else{
      hour === 12? time = '0' + (hour - 12) : time = hour;
      if(hour < 10){
        time = '0' + hour;
      };
    };
    if(min < 10){
      min = '0' + min;
    };
    return time = time + min;
}