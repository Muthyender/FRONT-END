let time = document.getElementById('time')
let playBtn =document.getElementById('play')
let pauseBtn =document.getElementById('pause')
let resetBtn =document.getElementById('reload')

let startTime;
let elapsedTime = 0;
let stopWatchInterval;


function timeToString(element)
{
    let diffInHrs = element/3600000
    let hr = Math.floor(diffInHrs)

    let diffInMin = (diffInHrs-hr)*60
    let min = Math.floor(diffInMin)
    

    let diffInSec = (diffInMin-min)*60
    let sec = Math.floor(diffInSec)

    let diffInMs = (diffInSec-sec)*1000
    let ms = Math.floor(diffInMs)
    
    hr = hr.toString().padStart(2,'0')
    min = min.toString().padStart(2,'0')
    sec = sec.toString().padStart(2,'0')
    ms = ms.toString().padStart(3,'0')

    time.innerText = `${hr}:${min}:${sec}:${ms}`
}


playBtn.addEventListener('click', startClock)
function startClock()
{
    startTime = Date.now() - elapsedTime
    stopWatchInterval = setInterval(function printTime()
     {
        elapsedTime = Date.now() - startTime
        timeToString(elapsedTime)
     }, 1);
    showBtn('PAUSE')
}   


pauseBtn.addEventListener('click',stopClock)
function stopClock()
{
    clearInterval(stopWatchInterval)
    showBtn('PLAY')
}


resetBtn.addEventListener('click', resetClock)
function resetClock()
{
    clearInterval(stopWatchInterval)
    time.innerText = `00:00:00:000`
    elapsedTime = 0
    showBtn('PLAY')
}


function showBtn(element)
{
    if(element === 'PAUSE')
    {
        playBtn.style.display = 'none'
        pauseBtn.style.display = 'block'
    }
    else
    {
        playBtn.style.display = 'block'
        pauseBtn.style.display = 'none'
    }
}

