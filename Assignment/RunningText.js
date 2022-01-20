let textEl = document.getElementById('text')
let speedEl = document.getElementById('speed')
const txt = 'We Love Programming!'
let val = 1;

let time = 500/speedEl.value;
speedEl.addEventListener('input', (e) => time = 500/e.target.value)

writeText();

function writeText()
{
    textEl.innerHTML = txt.slice(0,val)
    val++
    if(val > txt.length)
        val =1
    setTimeout(writeText, time)
}

