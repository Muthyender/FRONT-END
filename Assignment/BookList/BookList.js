let title = document.getElementById('title')
let author = document.getElementById('author')
let isbn = document.getElementById('isbn')
let btn = document.getElementById('btn')

let msg = document.getElementById('message')

let list = document.getElementById('list')

btn.addEventListener('click', () =>
{
    let titleVal = title.value
    let authorVal = author.value
    let isbnVal = isbn.value
    let isLocal = false

    if(!titleVal || !authorVal || !isbnVal)
    {
        msg.innerHTML = `<div class='fs-6 alert alert-danger col-10 mx-auto'>Please fill in all the fields</div>`

        setTimeout(() =>
        {
            msg.innerHTML = ''
        }, 3000)
    }

    else
    {
        table(titleVal, authorVal, isbnVal, isLocal)

        title.value = ''
        author.value = ''
        isbn.value = ''
    } 
})

function table(title, author, isbn, isLocal)
{
    if(!isLocal)
    {
        msg.innerHTML = `<div class='fs-6 alert alert-success col-10 mx-auto'>Book Added</div>`

        setTimeout(() =>
        {
            msg.innerHTML = ''
        }, 3000)
    }
    
    let newRow = document.createElement('div')
    newRow.classList.add('row', 'items')
    list.appendChild(newRow)

    let titleItem = document.createElement('div')
    titleItem.classList.add('col')
    newRow.appendChild(titleItem)
    titleItem.innerText = title

    let authorItem = document.createElement('div')
    authorItem.classList.add('col')
    newRow.appendChild(authorItem)
    authorItem.innerText = author

    let isbnItem = document.createElement('div')
    isbnItem.classList.add('col')
    newRow.appendChild(isbnItem)
    isbnItem.innerText = isbn

    let delBtn = document.createElement('div')
    delBtn.classList.add('col-1')
    newRow.appendChild(delBtn)
    delBtn.innerHTML = `<input type='button' class='btn btn-danger' value='x'>`

    delBtn.addEventListener('click', () => deleteRow(newRow))

    updateTable()
}

function deleteRow(newRow)
{
    list.removeChild(newRow)

    msg.innerHTML = `<div class='fs-6 alert alert-success col-10 mx-auto'>Book Removed</div>`

    setTimeout(() =>
    {
        msg.innerHTML = ''
    }, 3000)

    updateTable()
}

function updateTable()
{
    let listEls = document.querySelectorAll('.items')
    let listArr = []

    listEls.forEach(eachList =>
        {
            listArr.push({
                title: eachList.firstChild.innerText,
                author: eachList.firstChild.nextSibling.innerText,
                isbn: eachList.firstChild.nextSibling.nextSibling.innerText,
                isLocal:true,
            })
        })
        localStorage.setItem("rowString", JSON.stringify(listArr))
}

let localItems = JSON.parse(localStorage.getItem('rowString'))

if(localItems)
    localItems.forEach(eachItem => table(eachItem.title, eachItem.author, eachItem.isbn, eachItem.isLocal))