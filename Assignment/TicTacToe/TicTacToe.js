let submit = document.getElementById('submit')
let game = document.querySelector('.game')
let details = document.querySelector('.details')
let message = document.querySelector('.message')


let player1 = ''
let player2 = ''
let playGame = true
let activePlayer = 0


submit.addEventListener('click', startGame)

function startGame()
{
    player1 = document.getElementById('player1').value
    player2 = document.getElementById('player2').value

    if(player1 === '' || player2 === '')
        alert('Please enter both the names')
    else
    {
        activePlayer = 0

        details.style.display = 'none'
        game.style.display = 'flex'

        showMessage(`${activePlayer ===0 ? player1 : player2}, you're up`)

        for(let i=1; i <= 9; i++)
        {
            let div = document.createElement('div')
            div.id = i
            div.classList.add('game-slot')
            game.appendChild(div)

            div.addEventListener('click', function()
            {
                if(!div.innerText && playGame)
                {
                    div.innerText = activePlayer === 0 ? 'x' : 'o'
                    const winner = checkWinner()

                    console.log(winner)
                    if(!winner)
                    {
                        updateActivePlayer()
                        showMessage(`${activePlayer === 0 ? player1 : player2}, you're up`)
                    }
                    else
                    {
                        winnerMsg(`${activePlayer === 0 ? player1 : player2}, congratulations you Won!`)
                    } 
                }
            })            
        }
    }
}

function showMessage(msg)
{
    return message.innerHTML = `<h3> ${msg} </h3>`
}

function winnerMsg(msg)
{
    return message.innerHTML = `<h1 style = 'color: gold'> ${msg} </h1>`
}

function updateActivePlayer()
{
    if(activePlayer === 0)
        activePlayer = 1
    else
        activePlayer = 0
}

const winningSequences = 
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

function checkWinner()
{
    let winnerBool = false

    for(let i=0; i< winningSequences.length; i++)
    {
        let winningCombo = winningSequences[i]

        let cell1 = document.getElementById(winningCombo[0]+1)
        let cell2 = document.getElementById(winningCombo[1]+1)
        let cell3 = document.getElementById(winningCombo[2]+1)

        console.log(cell1)
        let val1 = cell1.innerText
        let val2 = cell2.innerText
        let val3 = cell3.innerText

        console.log(val1, val2, val3)

        if(val1 === val2 && val2 === val3 && val1 != '')
        {
            winnerBool = true
            playGame = false

            cell1.style.backgroundColor = '#861657'
            cell2.style.backgroundColor = '#861657'
            cell3.style.backgroundColor = '#861657'
            break
        }
    }
    return winnerBool
}