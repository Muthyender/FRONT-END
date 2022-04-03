let timerEl = document.getElementById('timer')
let quote = document.getElementById('quote')
let input = document.getElementById('input')

let apiQuotes = []
let time = 0
let random

async function getQuotes() {
    let apiURL = "https://api.quotable.io/random"

    let response = await fetch(apiURL)
    apiQuotes = await response.json()
    console.log(apiQuotes)

    newQuote()
}

function newQuote() 
{
    quote.innerText = ''
    
    random = apiQuotes.content
    console.log(random)

    let quoteArr = random.split('')

    quoteArr.forEach(character => 
        {
        let charSpan = document.createElement('span')
        charSpan.innerText = character
        quote.appendChild(charSpan)
        }) 
        input.value = ''
}

input.addEventListener('input', () => 
    {
        let enteredArr = input.value.split('')
        let allcharSpans = quote.querySelectorAll('span')
        allcharSpans.forEach((eachSpan, index) => 
        {
            if (!enteredArr[index]) 
            {
                allcharSpans[index].classList.remove('correct')
                allcharSpans[index].classList.remove('wrong')
            }

            else if (enteredArr[index] === eachSpan.innerText) 
            {
                allcharSpans[index].classList.add('correct')
                allcharSpans[index].classList.remove('wrong')
            }

            else 
            {
                allcharSpans[index].classList.add('wrong')
                allcharSpans[index].classList.remove('correct')
            }
            
            if(random.length === document.querySelectorAll('.correct').length)
            {
                time = -1
                getQuotes()
            }
        })    
    })

function timer() {
    time = 0
    timerEl.innerText = time
    setInterval(() => {
        time++
        timerEl.innerText = time
    }, 1000);
}

input.focus()

getQuotes()

timer()