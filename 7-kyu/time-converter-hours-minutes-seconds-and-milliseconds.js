function convert(time) {
  let hours = time.getHours();
  hours < 10 ? (hours = "0" + hours) : null;
  let mintues = time.getMinutes();
  mintues < 10 ? (mintues = "0" + mintues) : null;
  let seconds = time.getSeconds();
  seconds < 10 ? (seconds = "0" + seconds) : null;
  let milliseconds = time.getMilliseconds();
  milliseconds < 100 && milliseconds > 10? (milliseconds = "0" + milliseconds)
    : milliseconds < 10? (milliseconds = "0" + "0" + milliseconds)
    : null;
  return `${hours}:${mintues}:${seconds},${milliseconds}`;
}
