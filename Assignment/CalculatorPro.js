let displayxyz = document.getElementById('display');
let buttonxyz = document.getElementsByClassName('button');

function opxyz(op)
{
    if(op == '+' || op == '-' || op == '*' || op == '/')
        return true;
    return false;
}

function period(op)
{
    if(op == '.')
        return true;
    return false;
}

function clickxyz(entity) 
{
    var flag=true;
    if(displayxyz.innerText==="")
    {
        if(entity!='0' && !(opxyz(entity)))
        {
            displayxyz.innerText = displayxyz.innerText + entity;
        }  
    }
    else
    {
        if(opxyz(entity) && opxyz(displayxyz.innerText[displayxyz.innerText.length-1]) || period(entity) && period(displayxyz.innerText[displayxyz.innerText.length-1]))
        {
            displayxyz.innerText= displayxyz.innerText.slice(0,-1)
        }
        displayxyz.innerText = displayxyz.innerText + entity;
    }
}

function clearxyz()
{
    displayxyz.innerText="";
}

function back()
{
    displayxyz.innerText= displayxyz.innerText.slice(0,-1);
}

function calc()
{
    try
    {
        displayxyz.innerText= eval(displayxyz.innerText);    
    }
    catch
    {
        displayxyz.innerText= "Error"
    }
}

























// let displayxyz = document.getElementById("display")

// let buttonsxyz = (document.getElementsByClassName("btn"))
// console.log(buttonsxyz)

// function isOpxyz(opxyz){
//     if(opxyz==="+" || opxyz==='-' || opxyz==='/' || opxyz==='*')
//         return true
//     return false
// }
// function clickingxyz(clickedxyz){
//     if(displayxyz.innerText===""){
//         if(clickedxyz!='0'){
//             displayxyz.innerText = displayxyz.innerText+clickedxyz
//         }
//     }else{
//         // Just to make sure that 2 operators don't come in consecutive positions
//         if(isOpxyz(clickedxyz) && isOpxyz(displayxyz.innerText[displayxyz.innerText.length-1])){
//             displayxyz.innerText = displayxyz.innerText.slice(0,-1)
//         }
//         displayxyz.innerText = displayxyz.innerText+clickedxyz
//     }
// }

// function evalxyz(){
//     try{
//         displayxyz.innerText = eval(displayxyz.innerText)
//     }catch(err){
//         displayxyz.innerText="Error"
//     }
// }

// function clearxyz(){
//     displayxyz.innerText = ""
// }

// function backxyz(){
//     displayxyz.innerText = displayxyz.innerText.slice(0,-1)
// }