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
//Getting the location
window.addEventListener('load', () =>
{
    let lat, long

    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(position =>
            {
                lat = position.coords.latitude
                long = position.coords.longitude
                //Fetching URL based on gps
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
                    alert('Cannot fetch current location, Try using the Search instead.')
                }    
            })
    }
    else
    {
        alert("Geolocation functionality is not supported by this browser.")
    }  
})
//Fetching URL based on Input
form.addEventListener('submit', (e) =>
{
    e.preventDefault()
    if(!userInput.value)
        alert('Please enter the City Name')
    else
    {
        async function getData()
        {
            let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&APPID=0b4b9b21b99187c49fe7a4d8828119c1`
    
            try
            {
                let response = await fetch(apiURL)
                let requiredData = await response.json()
                setDetails(requiredData)
            }
            catch(requiredData)
            {
                window.alert(`Weather report not available for the place.`)
            }
        }
        
        getData()
        userInput.value = ''
    }  
})
//Setting the DOM elements through fetched URL data
function setDetails(requiredData)
{
    if(requiredData.name)
        cityName.innerText = requiredData.name
    countryName.innerText = requiredData.sys.country

    setTime(requiredData)    
//Setting Weather Icons
    let iconURL = `https://openweathermap.org/img/wn/${requiredData.weather[0].icon}@2x.png`
    icon.src = iconURL
    icon.style.display = 'block'

    setTemperature(requiredData)
//Setting Description
    description.innerText = requiredData.weather[0].description
    humidity.innerText = requiredData.main.humidity + '%'
    wind.innerText = (requiredData.wind.speed * 3.6).toFixed(2) + ' kmph'

    setBackground()
}
//Function for setting the Time through offset seconds fetched from URL
function setTime(requiredData)
{
    let apiTime = requiredData.timezone
    let offsetTime  = apiTime/3600

    let date = new Date()
    
    let offsetMin = offsetTime - Math.floor(offsetTime)

    let min = date.getUTCMinutes() + offsetMin*60
    let hr

//Setting time based on whether offset sseconds are postive or negative
    if(apiTime < 0)
    {
        if(min >= 60)
        {
            min = min-60
            hr = Math.floor(date.getUTCHours() + offsetTime + 1)
        }
        else
        {
            hr = Math.floor(12 + date.getUTCHours() + offsetTime)
        }
        //Setting AM or PM
        if(hr >= 12 && hr < 24)
        {
            amOrPm.innerText = 'AM'
        }
        else
        {
            amOrPm.innerText = 'PM'
        }
    }
    else
    {
        if(min >= 60)
        {
            min = min-60
            hr = Math.floor(date.getUTCHours() + offsetTime + 1)
        }
        else
        {
            hr = Math.floor(date.getUTCHours() + offsetTime)
        }
        //Setting AM or PM
        if(hr >= 12 && hr < 24)
        {
            amOrPm.innerText = 'PM'
        }
        else
        {
            amOrPm.innerText = 'AM'
        }
    }
    
    minutes.innerText = min.toString().padStart(2, '0')
    //Setting 12 hour format
    if(hr === 12 || hr === 24)
    {
        hr = 12
        hours.innerText = (hr).toString().padStart(2, '0')
    }
    else
    {
        hours.innerText = (hr % 12).toString().padStart(2, '0')
    }
}
//Function for setting Temperature
function setTemperature(requiredData)
{
    temperature.innerText = (requiredData.main.temp - 273.15).toFixed(2)
    temperatureUnit.innerText = 'C'
    //Click event for toggling between C or F
    temperatureContainer.addEventListener('click', () =>
    {
        if(temperatureUnit.innerText === 'C')
        {
            temperature.innerText = (temperature.innerText* 9/5 + 32).toFixed(2)
            temperatureUnit.innerText = 'F'
        }
        else
        {
            temperature.innerText = ((temperature.innerText - 32) * 5/9).toFixed(2)
            temperatureUnit.innerText = 'C'
        }
        
    })
}
//Function for changing backgroung based on part of the day
function setBackground()
{
    if(amOrPm.innerText === 'PM')
    {
        if((hours.innerText > 0 && hours.innerText < 4) || hours.innerText == 12)
            document.body.style.backgroundImage = 'url(day.jpg)' 
        else if(hours.innerText >= 4 && hours.innerText < 8)
            document.body.style.backgroundImage = 'url(evening.jpg)'
        else
            document.body.style.backgroundImage = 'url(night.jpeg)'

    }
    else
    {
        if((hours.innerText > 0 && hours.innerText < 6) || hours.innerText == 12)
            document.body.style.backgroundImage = 'url(night.jpeg)'
        else
            document.body.style.backgroundImage = 'url(morning.jpeg)'
    }
}