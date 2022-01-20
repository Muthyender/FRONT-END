const colors = ['#ff7f50','#87cefa','#da70d6','#32cd32','#6495ed','#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0']

let container = document.getElementById('container')

for(let i=0; i<700; i++)
{
    let box = document.createElement('div')
    box.classList.add('box')

    box.addEventListener('mouseover', () => setColor(box))
    box.addEventListener('mouseout', () => removeColor(box))
    
    container.appendChild(box)
}

function setColor(element)
{
    let val = Math.floor(Math.random()*colors.length)
    element.style.background = clr = colors[val]
    element.style.boxShadow = `0 0 2px ${clr}, 0 0 10px ${clr}`
}

function removeColor(element)
{
    element.style.background = 'rgb(29, 26, 26)';
    element.style.boxShadow = 'none'
}