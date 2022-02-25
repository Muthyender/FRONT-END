let digits = document.querySelectorAll('.digit')

digits[0].focus()

digits.forEach((element,idx) =>
    {
        element.addEventListener('keydown', (e) =>
        {
            let keyPressed = e.key

            if(keyPressed >= 0 && keyPressed <= 9)
            {
                element.value = ''
                if(idx < digits.length-1)
                    setTimeout(() => element.nextElementSibling.focus(), 0)
            }
            else if(keyPressed === 'Backspace')
                if(idx > 0)
                    setTimeout(() => element.previousElementSibling.focus(), 0)
        })
    })