let time = document.getElementById('time')
let playBtn =document.getElementById('play')
let pauseBtn =document.getElementById('pause')
let resetBtn =document.getElementById('reload')

let  hr=0, min=0, sec=0;
let timeStopped = true

playBtn.addEventListener('click', startTime)
function startTime()
{
    if(timeStopped)
    {
        timeStopped = false
        showBtn('PAUSE')
        setTimeout(watchCycle, 1000)
    }
}   

function watchCycle()
{
    if(!timeStopped)
    {
        sec++
        if(sec>59)
        {
            min++
            sec=0
        }
        if(min>59)
        {
            hr++
            min=0
            sec=0
        }
        sec= sec.toString().padStart(2,'0')
        min= min.toString().padStart(2,'0')
        hr= hr.toString().padStart(2,'0')
        time.innerText = `${hr}:${min}:${sec}`
        setTimeout(watchCycle, 1000)
    }
}

pauseBtn.addEventListener('click',stopTime)
function stopTime()
{
    if(!timeStopped)
    {
        timeStopped = true
        showBtn('PLAY')
    }
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

resetBtn.addEventListener('click', resetTime)
function resetTime()
{
    timeStopped = true
    time.innerText = '00:00:00'
    hr=0
    min=0
    sec=0
    showBtn('PLAY')
}
