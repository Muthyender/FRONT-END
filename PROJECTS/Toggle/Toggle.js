let good = document.getElementById('good')
let cheap = document.getElementById('cheap')
let fast = document.getElementById('fast')
let toggles = document.querySelectorAll('.toggle')

console.log(toggles)
toggles.forEach((element) => {
    element.addEventListener('change', (e) =>
    {
        console.log(e)
        console.log(e.target)
        checkFunc(e.target)
    })
});


function checkFunc(clickedOne)
{
    if(good.checked && cheap.checked && fast.checked)
    {
        if(good === clickedOne)
            fast.checked = false
        if(cheap === clickedOne)
            good.checked = false
        if(fast === clickedOne)
            cheap.checked = false
    }
}