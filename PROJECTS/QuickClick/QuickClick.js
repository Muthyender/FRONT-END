let instructions = document.querySelector('.instructions')
let message = document.querySelector('.message')
let results = document.querySelector('.results')
let gameArea = document.querySelector('.gameArea')
let button = document.querySelector('button')

let start 
let score = 0
let play = false
let playArea = {}
button.addEventListener('click', () =>
{
    play = true
    button.style.display = 'none'
    instructions.innerHTML = ''
    results.innerHTML = ''
    message.innerHTML = '<h1>Starting...</h1>'
    playArea.timer = setTimeout(showCircle, random(3000))
})

function showCircle()
{
    if(play)
    {
        gameArea.style.display = 'block'
        let circle = document.createElement('div')
        circle.classList.add('circle')
        
        circle.start = Date.now()

        let color = randColor()
        circle.style.backgroundColor = color
        circle.style.border = `2px solid ${color}`

        circle.style.top = `${random(getMeHeight())}px`
        circle.style.left = `${random(getMeWidth())}px`

        gameArea.appendChild(circle)
        circle.addEventListener('click', hit)

        playArea.timer = setTimeout(() =>
        hit({target: {start: circle.start}}), 1000)
    }
}

function hit(circle)
{
    let start = circle.target.start
    let end = Date.now()
    let duration = (end-start)/1000

    if(playArea.timer)
        clearTimeout(playArea.timer) 

    if(duration > 1)
    {
        message.innerHTML = `<h1>It took you more than 1 second to click</h1>`
        results.innerHTML = `Too Slow! <span style = 'color: red'>You Lost! </span> Your score was ${score}. <br> Click the Start button to play again!`
        endGame(circle)  
    }
    else
    {
        score++
        message.innerHTML = `<h1>It took you ${duration} seconds to click</h1>`
        if(score < 15)
            results.innerHTML = `Score : ${score} of 15`
        else
        {
            results.innerHTML = `You reached ${score}! <span style = 'color: green'> You win!</span>
            <br> Click the Start button to play again!`
            endGame(circle)
        }
        if(gameArea.children[0])
            gameArea.children[0].remove()
        playArea.timer = setTimeout(showCircle, random(3000))
    }
    
}


function getMeHeight()
{
    let height = gameArea.clientHeight
    if(height <= 200)
        height += 200
    else
        height -= 200
    return height
}

function getMeWidth()
{
    let width = gameArea.clientWidth
    if(width <= 200)
        width += 200
    else
        width -= 200
    return width
}

function random(num)
{
    return Math.ceil(Math.random()*num)
}

function randColor()
{
    function color()
    {
        let hex = random(255).toString(16)
        return hex.padStart(2, '0')
    }
    return '#' + color() + color() + color()
}

function endGame()
{
    play = false
    gameArea.style.display = 'none'
    gameArea.children[0].remove()
    clearTimeout(playArea.timer)
    button.style.display = 'block'
    score = 0
}