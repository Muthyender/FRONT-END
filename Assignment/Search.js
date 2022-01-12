let searchxyz = document.getElementById('search')
let btnxyz= document.getElementById('btn')

btnxyz.addEventListener('click', function()
{
    searchxyz.classList.toggle('active')
    searchxyz.focus();
})