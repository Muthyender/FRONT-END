var panel1= document.getElementById("panel1")
var panel2= document.getElementById("panel2")
var panel3= document.getElementById("panel3")
var panel4= document.getElementById("panel4")
var panel5= document.getElementById("panel5")

function myFunction(num)
{
    panel1.classList.remove("active");
    panel2.classList.remove("active");
    panel3.classList.remove("active");
    panel4.classList.remove("active");
    panel5.classList.remove("active");

    switch(num)
    {
        case 1: panel1.classList.add("active")
        break
        case 2: panel2.classList.add("active")
        break
        case 3: panel3.classList.add("active")
        break
        case 4: panel4.classList.add("active")
        break
        case 5: panel5.classList.add("active")
        break
    }
}