let cups = document.querySelectorAll('.small')
let litres = document.getElementById('litres')
let percent = document.getElementById('percentage')
let remained = document.getElementById('remained')

cups.forEach((eachCup,index) =>
{
    eachCup.addEventListener('click', () => highlightCups(index))
})
bigCup()

function highlightCups(index)
{
    if(index === cups.length-1 && cups[index].classList.contains('full'))
        index--
    if(cups[index].classList.contains('full') && !cups[index].nextElementSibling.classList.contains('full'))
        index--

    cups.forEach((eachCup, localIndex) =>
    {
        if(localIndex <= index)
            eachCup.classList.add('full')
        else
            eachCup.classList.remove('full')
    })

    bigCup()
}

function bigCup()
{
    let fullCupsNo = document.querySelectorAll('.full').length
    let totalCupsNo = cups.length

    if(fullCupsNo === 0)
    {
        percent.style.visibility = 'hidden'
        percent.style.height = 0
    }
    else
    {
        percent.innerText = `${(fullCupsNo/totalCupsNo)*100}%`
        percent.style.visibility = 'visible'
        percent.style.height = `${(fullCupsNo/totalCupsNo)*100}%`
    }

    if(fullCupsNo === totalCupsNo)
    {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }
    else
    {
        litres.innerText = `${(totalCupsNo-fullCupsNo)*0.25} L`
        remained.style.visibility = 'visible'
        remained.style.height = `${100 - (fullCupsNo/totalCupsNo)*100}%`
    }
}