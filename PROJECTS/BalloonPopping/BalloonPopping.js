let container = document.querySelector('.container')
let result = document.querySelector('.result')

let popped = 0

for(let i=0; i< 25; i++)
{
    let balloon = document.createElement('div')
    balloon.classList.add('balloon')
    container.appendChild(balloon)

    balloon.innerText = 'POP!'

    let randColor = getColor()

    balloon.style.backgroundColor = randColor
    balloon.style.color = randColor

    balloon.addEventListener('mouseenter', function ()
    {
        if(!(balloon.style.backgroundColor === 'transparent'))
        {
            balloon.style.backgroundColor = 'transparent'
            popped++ 
            allPopped()
        }
    })
}

function allPopped()
{
    if(popped === 25)
    {
        result.style.display = 'block'
        container.style.display = 'none'
    } 
}

function getColor()
{
    function color()
    {
        let hex = random(255).toString(16)
        return hex.padStart(2,'0')
    }
    return `#${color()}${color()}${color()}`
}

function random(number)
{
    return Math.ceil(Math.random()*number)
}

