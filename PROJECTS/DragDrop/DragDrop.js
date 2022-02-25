let columns = document.querySelectorAll('.col')
let items = document.querySelectorAll('.item')

let draggedItem = null
items.forEach(item =>
    {
        
        item.addEventListener('drag', () =>
        {
            draggedItem = item
            item.style.display = 'none'
        })

        item.addEventListener('dragend', () =>
        {
            item.style.display = 'block'
        })

        columns.forEach(column =>
            {
                column.addEventListener('dragover', function (e) 
                {
                    e.preventDefault()
                })

                column.addEventListener('dragenter', (e) =>
                {
                    e.preventDefault()
                    column.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
                })

                column.addEventListener('dragleave', function (e)
                {
                    e.preventDefault()
                    column.style.backgroundColor = 'rgb(226, 185, 3)'
                })

                column.addEventListener('drop', function (e)
                {
                    column.append(draggedItem)
                    column.style.backgroundColor = 'rgb(226, 185, 3)'
                })
            })
    })







