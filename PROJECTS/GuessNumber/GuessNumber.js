let input = document.getElementById('num')
let submitBtn = document.getElementById('submitBtn')
let guesses = document.getElementById('guesses')
let remaining = document.getElementById('remaining')
let lowHigh = document.getElementById('lowHigh')

let content = document.querySelector('.blue')

input.focus()
let randNum = Math.ceil(Math.random()*100)

let guessRemain = 9

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()

    let inputValue = Number(input.value)
    guesses.innerHTML += `${inputValue} `

    remaining.innerHTML = guessRemain

    if(randNum === inputValue)
    {
        lowHigh.innerText = 'You guessed correctly!'
        endGame()
    }
    else if(randNum < inputValue)
    {
        guessRemain--
        lowHigh.innerText = 'Too High! Try a smaller number'
    }
    else
    {
        guessRemain--
        lowHigh.innerText = 'Too Low! Try a smaller number'
    }
    
    if(guessRemain < 0)
    {
        lowHigh.innerText = `Game Over! Number was ${randNum}`
        endGame()
    }
    
    input.value = ''
})

function endGame()
{
    let reloadEl = document.createElement('button')
    reloadEl.classList.add('reload')
    content.appendChild(reloadEl)
    reloadEl.innerHTML = `<div onclick = 'newGame()'>Start new Game</div>`

    input.disabled = true
    submitBtn.disabled = true
}

function newGame()
{
    location.reload();
}

