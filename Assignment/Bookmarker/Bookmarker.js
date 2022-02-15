let form = document.querySelector('form')

let siteInput = document.getElementById('site')
let urlInput = document.getElementById('url')
let btn = document.getElementById('btn')
let list = document.querySelector('.list')

form.addEventListener('submit', (e) => 
{
    e.preventDefault()
    let siteValue = siteInput.value
    let urlValue = urlInput.value

    if(!siteValue || !urlValue)
        alert('Please fill in all the  details')

    else if(urlValue.indexOf('.') === urlValue.length-1 || urlValue.indexOf('.') === urlValue.length-2 || urlValue.indexOf('.') === -1 || urlValue.indexOf(' ') !== -1)
        alert('Please enter a valid URL')

    else
    {
        createList(siteValue, urlValue)
        siteInput.value = ''
        urlInput.value = ''
    }
})

function createList(site, url)
{
    let newBookmark = document.createElement('div')
    newBookmark.classList.add('listItems', 'mb-3')
    list.appendChild(newBookmark)


    let name = document.createElement('span')
    name.innerText = `${site}` 
    newBookmark.appendChild(name)


    let link = document.createElement('a')
    link.classList.add('btn', 'btn-outline-dark')
    link.innerText = 'Visit'

    if(url.indexOf('https://') === -1 && url.indexOf('http://') === -1 )
        link.href = `https://${url}`
        
    else
        link.href = `${url}`

    newBookmark.appendChild(link)


    let delBtn = document.createElement('button')
    delBtn.classList.add('btn', 'btn-danger')
    delBtn.innerText = 'Delete'
    newBookmark.appendChild(delBtn)

    delBtn.addEventListener('click', () => deleteBookmark(newBookmark))
    
    updateList()
}

function deleteBookmark(newBookmark)
{
    list.removeChild(newBookmark)
    updateList()
}

//Local Storage
function updateList()
{
    let listEls = document.querySelectorAll('.listItems')
    let listArr = []

    listEls.forEach(eachBookmark =>
        {
            listArr.push({
                site: eachBookmark.firstChild.innerText,
                url: eachBookmark.firstChild.nextSibling.href, 
            })
        })
    localStorage.setItem('bookmarkString', JSON.stringify(listArr))       
}

let localItems = JSON.parse(localStorage.getItem('bookmarkString'))

if(localItems)  
    localItems.forEach(eachBookmark => createList(eachBookmark.site, eachBookmark.url))