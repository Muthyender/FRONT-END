let form = document.querySelector('form')
let userInput = document.getElementById('user-input')
let btn = document.getElementById('btn')
let cityName = document.getElementById('city-name')
let countryName = document.getElementById('country-name')
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let amOrPm = document.getElementById('am-pm')
let icon = document.getElementById('icon')
let temperature = document.getElementById('temperature')
let temperatureUnit = document.getElementById('temperature-unit')
let description = document.getElementById('description')
let humidity = document.getElementById('humidity')
let wind = document.getElementById('wind')

let temperatureContainer = document.querySelector('.temperature-container')

window.addEventListener('load', () =>
{
    let lat, long

    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(position =>
            {
                lat = position.coords.latitude
                long = position.coords.longitude

                let apiURL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=0b4b9b21b99187c49fe7a4d8828119c1`
                try
                {
                    fetch(apiURL)
                    .then(response => response.json())
                    .then(requiredData => 
                        {
                            setDetails(requiredData)
                        })
                }  
                catch(error)
                {
                    alert('Cannot fetch current location, Try using the Search instead')
                }
                
            })
    }
    
})

form.addEventListener('submit', (e) =>
{
    e.preventDefault()
    
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&APPID=0b4b9b21b99187c49fe7a4d8828119c1`
    try
    {
        fetch(apiURL)
        .then(response => response.json())
        .then(requiredData => 
            {
                if(requiredData.name)
                    setDetails(requiredData)
            })
    }
    catch
    {
        window.alert(`Weather report not available for ${userInput.value}`)
    }
    userInput.value = ''
})

function setDetails(requiredData)
{
    cityName.innerText = requiredData.name
    countryName.innerText = requiredData.sys.country

    let apiTime = requiredData.timezone
    let offsetTime  = apiTime/3600

    let a = new Date()
    
    let offsetMin = offsetTime - Math.floor(offsetTime)

    let min = a.getUTCMinutes() + offsetMin*60
    let hr
    if(min > 60)
    {
        min = min-60
        hr = Math.floor(a.getUTCHours() + offsetTime + 1)
    }
    else
    {
        hr = Math.floor(a.getUTCHours() + offsetTime)
    }
    minutes.innerText = min.toString().padStart(2, '0')

    if(hr > 12 && hr < 24)
    {
        amOrPm.innerText = 'PM'
    }
    else
    {
        amOrPm.innerText = 'AM'
    }
    if(hr === 12 || hr === 24)
    {
        hr = 12
        hours.innerText = (hr).toString().padStart(2, '0')
    }
    else
    {
        hours.innerText = (hr % 12).toString().padStart(2, '0')

    }

    let iconURL = `https://openweathermap.org/img/wn/${requiredData.weather[0].icon}@2x.png`
    icon.src = iconURL

    temperature.innerText = (requiredData.main.temp - 273.15).toFixed(2)
    temperatureUnit.innerText = 'C'

    temperatureContainer.addEventListener('click', () =>
    {
        if(temperatureUnit.innerText === 'C')
        {
            temperature.innerText = ((requiredData.main.temp - 273.15)* 9/5 + 32).toFixed(2)
            temperatureUnit.innerText = 'F'
        }
        else
        {
            temperature.innerText = (requiredData.main.temp - 273.15).toFixed(2)
            temperatureUnit.innerText = 'C'
        }
    })

    description.innerText = requiredData.weather[0].description
    humidity.innerText = requiredData.main.humidity + '%'
    wind.innerText = (requiredData.wind.speed * 3.6).toFixed(2) + ' kmph'

    if(amOrPm.innerText === 'PM')
    {
        if(hours.innerText >= 12 && hours.innerText < 4)
        {
            document.body.style.backgroundImage = 'url(day.jpeg)'
        }
            
        else if(hr > 4 && hr < 8)
        {
            document.body.style.backgroundImage = 'url(evening.jpg)'

        }
        else
        {
            document.body.style.backgroundImage = 'url(night.jpeg)'
        }

    }
    else
    {
        if((hr > 0 && hr < 6) || hr === 12)
        {
            document.body.style.backgroundImage = 'url(night.jpeg)'
        }
        else
        {
            document.body.style.backgroundImage = 'url(morning.jpeg)'
        }
    }
}

