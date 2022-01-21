let btnxyz = document.getElementsByClassName('sound');

for(let i=0; i<btnxyz.length; i++)
{
    let selectedbtn= btnxyz[i]
    playSound(selectedbtn)
}

function playSound(btn)
{
    btn.addEventListener('click', function ()
    {
        stopSound()
        document.getElementById(btn.innerText).play();
            
    })
}
    
function stopSound()
{
    for(let i=0; i< btnxyz.length; i++)
    {
        let sound = document.getElementById(btnxyz[i].innerText)
        sound.pause()
        sound.currentTime = 0
    }
}
    
let stopxyz = document.getElementById("stop")
stopxyz.addEventListener('click', function ()
{
    stopSound()
})


