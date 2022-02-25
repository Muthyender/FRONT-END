let container = document.getElementById('container')
let quote = document.getElementById('quote')
let author = document.getElementById('author')
let loader = document.getElementById('loader')
let button = document.getElementById('btn')

let apiQuotes = []
async function getQuotes()
{
    container.hidden = true
    loader.hidden = false
    
    let apiURL = "https://type.fit/api/quotes"

    try
    {
        let response = await fetch(apiURL)
        apiQuotes = await response.json()
        
        newQuote()
    }
    catch(error)
    {
        console.log(error)
    }
}

function newQuote()
{
    container.hidden = true
    loader.hidden = false

    setTimeout(function()
    {
        let randomQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]

        quote.innerHTML = `&nbsp;${randomQuote.text}&nbsp;`

        if(!randomQuote.author)
            author.innerHTML = `<i>Anonymous<i>`
        else
            author.innerHTML = `<i>${randomQuote.author}<i>`

        loader.hidden = true
        container.hidden = false
    }, 400)  
}

button.addEventListener('click', newQuote)
getQuotes()