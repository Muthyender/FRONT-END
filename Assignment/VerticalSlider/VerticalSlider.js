let container = document.querySelector('.container')
let leftSlide = document.querySelector('.left-slide')
let rightSlide = document.querySelector('.right-slide')

let upBtn = document.querySelector('.up-btn')
let downBtn = document.querySelector('.down-btn')

let slidesLength = rightSlide.querySelectorAll('div').length

let activeSlide = 0

leftSlide.style.top = `-${(slidesLength-1)*100}vh`


upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))

function changeSlide(direction)
{
    let sliderHeight = container.clientHeight

    if(direction === 'up')
    {
        activeSlide++
        if(activeSlide > slidesLength-1)
            activeSlide = 0
    }
    else if(direction === 'down')
    {
        activeSlide--
        if(activeSlide < 0)
            activeSlide = slidesLength-1
    }

    leftSlide.style.transform = `translateY(${activeSlide*sliderHeight}px)`
    rightSlide.style.transform = `translateY(-${activeSlide*sliderHeight}px)`
}

