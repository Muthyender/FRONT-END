let start = document.querySelector('.btn')
let boards = document.querySelector('.boards')
let select = document.querySelector('.select')

let message = document.getElementById('message')

let pScore = document.getElementById('playerScore')
let playSelect = document.getElementById('playerSelect')
let cScore = document.getElementById('computerScore')
let compSelect = document.getElementById('computerSelect')

let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')

let compScore = 0, playScore = 0

start.addEventListener('click', () =>
{
    start.style.display = 'none'
    boards.style.display = 'block'
    select.style.display = 'block'

    rock.addEventListener('click', () => game(rock.id))
    paper.addEventListener('click', () => game(paper.id))
    scissors.addEventListener('click', () => game(scissors.id))  
})
 

function game(selection)
{
    playSelect.innerHTML = `<i class="fas fa-hand-${selection} fa-4x"></i>`
    let cPlay = compPlay()
    compSelect.innerHTML = `<i class="fas fa-hand-${cPlay} fa-4x"></i>`

    round(selection, cPlay) === 1 ? playSelect.style.color = 'green' : (round(selection, cPlay) === -1 ? playSelect.style.color = 'red' : playSelect.style.color = 'black')
    round(selection, cPlay) === -1 ? compSelect.style.color = 'green' : (round(selection, cPlay) === 1 ? compSelect.style.color = 'red' : compSelect.style.color = 'black')
    
    if(round(selection, cPlay) === 1 )
    {
        playScore++
        message.innerHTML = '<h5> Player Won! </h5>'
    }
    else if(round(selection, cPlay) === -1 )
    {
        compScore++
        message.innerHTML = '<h5> Computer Won! </h5>'  
    }
    else
        message.innerHTML = '<h5> Draw! </h5>' 

    pScore.innerText = playScore
    cScore.innerText = compScore


    if(playScore === 5 || compScore === 5)
    {
        if(playScore === 5)
            message.innerHTML = '<h3> Player is the winner! Congratulations! </h3>'
        else
            message.innerHTML =  '<h3> Computer is the Winner! You Lose! </h3>' 

        message.style.color = 'rgb(228, 197, 21)'
        select.style.display = 'none'

        setTimeout(endGame, 2000)
    } 
}

function endGame()
{
    compScore = 0
    playScore = 0
    cScore.innerText = compScore
    pScore.innerText = playScore
    playSelect.innerHTML = ''
    compSelect.innerHTML = ''
    select.style.display = 'block'
    message.style.color = 'black'
    message.innerHTML = '<h5>Choose rock, paper, or scissors to play again</h5>'
}

function round(player, computer)
{
    if(player === computer)
        return 0

    else
    {
        if(player === 'rock')
        {
            if(computer === 'paper')
                return -1
            else
                return 1
        }
        if(player === 'paper')
        {
            if(computer === 'scissors')
                return -1
            else
                return 1
        }
        if(player === 'scissors')
        {
            if(computer === 'rock')
                return -1
            else
                return 1
        }
    }
}

function compPlay()
{
    let arr = ['rock', 'paper', 'scissors']

    return arr[Math.floor(Math.random()*3)]
}
    