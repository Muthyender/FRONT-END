let timerEl = document.getElementById('timer')
let quote = document.getElementById('quote')
let input = document.getElementById('input')

let apiQuotes = []
let time
// timerEl.innerText = time

async function getQuotes()
{
    let apiURL = "http://api.quotable.io/random"

    let response = await fetch(apiURL)
    apiQuotes = await response.json()

    // console.log(apiQuotes.content)
    newQuote()  
}

function newQuote()
{
    let random = apiQuotes.content

    quote.innerText = random
    console.log(random)

    let quoteArr = random.split('')
    console.log(quote)

    // quote.innerHTML = `<span id='test' style='color:red;'>${quote.innerHTML.charAt(0)}</span>`+ quote.innerHTML.slice(1);

    // quote.innerHTML = quote.innerHTML.replace('a', 'a'.style.color = 'red')
    // let original = quote.innerHTML
    // let newOne = original.replace(original.charAt(0), `<span id='test' style='color:red;'>${original.charAt(0)} </span>`)
    // quote.innerHTML = newOne


    // quote.style.color = 'green'

    input.addEventListener('input', () =>
    {
        let enteredArr = input.value.split('')
        
        //     console.log(quote.innerHTML.charAt(3))

            // quote.innerHTML = quote.innerHTML.charAt(0)
       
        // console.log(quote.innerText[enteredArr.length - 1])
       
        quote.innerHTML = quote.innerHTML.replace(quote.innerHTML.charAt(enteredArr.length - 1), quote.innerHTML = `<span id='test' style='color:green;'>${quote.innerHTML.charAt(enteredArr.length - 1)}`)
            // if(enteredArr[enteredArr.length - 1] === quoteArr[enteredArr.length - 1])
            // {
            //     quote.innerHTML = `<span id='test' style='color:green;'>${quote.innerHTML.charAt(enteredArr.length - 1)}</span>${quote.innerHTML.slice(1)}`;
            //     // quote.innerText[enteredArr.length - 1].style.color = 'green'
            //     console.log(quote.innerText[enteredArr.length - 1])
            // }
        
        // else
        // {
        //     quote.innerHTML = `<span id='test' style='color:red;'>${quote.innerHTML.charAt(enteredArr.length - 1)}</span>${quote.innerHTML.slice(1)}`;
        //     // quote.innerText[enteredArr.length - 1].style.color = 'green'
        //     console.log(quote.innerText[enteredArr.length - 1])
        // }
    })
   
    
}

function timer()
{
    time = 0
    timerEl.innerText = time
    time = setInterval(() => 
    {
        timerEl.innerText = time
        time++
    }, 1000);
}


input.focus()

getQuotes()

timer()