let submit = document.getElementById('submit')
let playerCountEl = document.getElementById('playerCount')
let gridSizeEL = document.getElementById('gridSize')


submit.addEventListener('click', function () 
{
    const playerCount = playerCountEl.value
    const gridSize = gridSizeEL.value
    console.log(playerCount, gridSize)

    let stats = []
    for(let i=1; i<= playerCount; i++)
    {
        stats.push(
            {
                id: i,
                position: 0,
                rolls: [],
                path: [0],
            }
        )
    }

    let max = 0
    let maxId = -1

    while(max < gridSize * gridSize)
    {
        for(let i=0; i < playerCount; i++)
        {
            let roll = randomRoll()
            stats[i].rolls.push(roll)

            if(stats[i].position === 0 && (roll !== 1 && roll !== 6))
            {
                stats[i].path.push(stats[i].position) 
            }
            else
            {
                let newPos = stats[i].position + roll

                if(newPos <= gridSize*gridSize)
                {
                    stats[i].position =  newPos
                    stats[i].path.push(newPos)

                    if(newPos > max)
                    {
                        max = newPos
                        maxId = stats[i].id
                    }
                    if(max >= gridSize*gridSize)
                        break
                }
                else
                {
                    stats[i].path.push(stats[i].position)
                }  

            }

            console.log(i, roll, stats[i].position, stats[i].rolls, stats[i].path, max)  
        }
    }
    console.log(stats)
    table(stats, playerCount, maxId)
}) 

function table(stats, playerCount, winnerId)
{
    let table = document.getElementById('card')
    table.innerHTML = ''
    for(let i=0; i< playerCount; i++)
    {
        let tr = document.createElement('tr')
        let tdId = document.createElement('td')
        let tdRoll = document.createElement('td')
        let tdRolls = document.createElement('td')
        let tdPath = document.createElement('td')
        let tdWinner = document.createElement('td')

        table.appendChild(tr)
        
        tr.appendChild(tdId)
        tr.appendChild(tdRoll)
        tr.appendChild(tdRolls)
        tr.appendChild(tdPath)
        tr.appendChild(tdWinner)

        tdId.innerText = stats[i].id
        if(stats[i].rolls.length - 1 >= 0)
            tdRoll.innerText = stats[i].rolls[stats[i].rolls.length - 1]
        tdRolls.innerText = stats[i].rolls
        tdPath.innerText = stats[i].path

        if(winnerId === stats[i].id)
        {
            tdWinner.innerText = '*WINNER*'
            tdWinner.style.color = 'rgb(212,175,55)'
            tdWinner.style.fontWeight = 'bolder'
            tdWinner.style.fontSize = '1.3rem'
        }
        tdId.style.fontSize = '1.2rem'
        tdId.style.fontWeight = 'bold'

    }
}


function randomRoll() 
{
    return Math.ceil(Math.random() * 6)
}










// const submit = document.getElementById("submit")
// const playerCountEl = document.getElementById("playerCount")
// const gridSizeEl = document.getElementById("gridSize")


// submit.addEventListener("click",function(){

//     const numPlayers = playerCountEl.value
//     const gridSize = gridSizeEl.value

//     let playerStats = []

//     for(let i=1;i<=numPlayers;i++)
//     {
//         playerStats.push({
//             id:i,
//             reach:0,
//             rolls:[],
//             path:[0]
//         })
//             // path with first element as 0
//     }

//     // Till when will we play the game??
//     // Ans - Till someone wins
//     // Winner reach>=gridSize*gridSize
//     let maxReach = 0
//     let maxReachId = -1

//     while(maxReach<gridSize*gridSize)
//     {

//         for(let i=0;i<numPlayers;i++)
//         {
//             const currRoll = getRandomRoll()
//             playerStats[i].rolls.push(currRoll)

//             if(playerStats[i].reach===0 && (currRoll !== 1 && currRoll !== 6))
//             {
//                 // This was neither a 1 nor a 6
//                 // Do nothing
//                 playerStats[i].path.push(0)
//             }
//             else
//             {
//                 const newReach = playerStats[i].reach+currRoll

//                 if(newReach<=gridSize*gridSize)
//                 {
//                     playerStats[i].reach = newReach
        
//                     playerStats[i].path.push(newReach)
        
//                     if(newReach>maxReach)
//                     {
//                         maxReach = newReach
//                         maxReachId = playerStats[i].id
//                     }
//                     if(maxReach>=gridSize*gridSize)
//                     {
//                         break;
//                     }
//                 }
//                 else
//                 {
//                     playerStats[i].path.push(playerStats[i].reach)
//                 }                
//             }
//             console.log(i, currRoll, playerStats[i].reach, playerStats[i].rolls, playerStats[i].path, maxReach)
//         }
//     }
//     console.log(playerStats)

//     createGameCard(playerStats,maxReachId,numPlayers)
// })

// function createGameCard(playerStats,winnerId,numPlayers){
//     // const table = document.getElementById("card")
//     const tableBody = document.getElementById("card")
//     tableBody.innerHTML=''
//     for(let i=0;i<numPlayers;i++){
//         const tr = document.createElement("tr")

//         const tdId = document.createElement("td")
//         const tdDiceRoll = document.createElement("td")
//         const tdDiceRollHistory = document.createElement("td")
//         const tdPositionHistory = document.createElement("td")
//         const tdWinnerStatus = document.createElement("td")

//         tdId.innerHTML = playerStats[i].id

//         // Last element in the dice roll
//         const lastIndexDiceRoll = playerStats[i].rolls.length-1
//         if(lastIndexDiceRoll>=0)
//             tdDiceRoll.innerHTML = playerStats[i].rolls[lastIndexDiceRoll]

//         tdDiceRollHistory.innerHTML = playerStats[i].rolls.toString()

//         tdPositionHistory.innerHTML = playerStats[i].path.toString()

//         if(playerStats[i].id==winnerId){
//             tdWinnerStatus.innerHTML="Winner"
//         }else{
//             tdWinnerStatus.innerHTML=""
//         }

//         tr.appendChild(tdId)
//         tr.appendChild(tdDiceRoll)
//         tr.appendChild(tdDiceRollHistory)
//         tr.appendChild(tdPositionHistory)
//         tr.appendChild(tdWinnerStatus)

//         tableBody.appendChild(tr)
//     }
// }

// function getRandomRoll(){
//     // Between 1 and 6, both inclusive
//     return Math.floor(Math.random()*6+1)
// }