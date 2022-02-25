let prev = document.getElementById('prev');
let next = document.getElementById('next');

let circles = document.getElementsByClassName('circle')
let progress = document.getElementById('progress')

let currentActive = 1
let noOfCircles = circles.length

next.addEventListener('click',() => 
{
    currentActive++

    if(currentActive > noOfCircles)
        currentActive = noOfCircles
    console.log(currentActive)
    updateCSS();
})

prev.addEventListener('click', () =>
{
    currentActive--
    
    if(currentActive < 1)
        currentActive = 1
    console.log(currentActive)
    updateCSS();
})

function enableDisable()
{
    if(currentActive === 1)
        prev.disabled = true
    else if(currentActive === noOfCircles)
        next.disabled = true    
    else
    {
        prev.disabled = false
        next.disabled = false
    }
}

function updateCSS()
{
    for(let i=0; i< noOfCircles; i++)
    {
        const circle = circles[i]
        if(i < currentActive)
            circle.classList.add('active')
        else
            circle.classList.remove('active')
    }
    const activexyz = document.getElementsByClassName('active')

    const widthxyz = (activexyz.length - 1)/(noOfCircles - 1) * 100
    progress.style.width = `${widthxyz}%`
    enableDisable();
}