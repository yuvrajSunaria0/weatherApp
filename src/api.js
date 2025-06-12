import { DateTime } from "luxon"
const apiKey = "debb96151d4d42bdb7c36e636d5b1758"
const BaseURL = "https://api.openweathermap.org/data/2.5/"


const api = async (weatherType, city) => {
    const url = `${BaseURL}${weatherType}?q=${city}&appid=${apiKey}`
    
    return await fetch(url).then((d) => d.json()).then((d) => d)
    // console.log(await k)
    // return k
}
const BodyApi = async(weatherType, lat, lon) => {
    const url = `${BaseURL}${weatherType}?lat=${lat}&lon=${lon}&appid=${apiKey}`

    return await fetch(url).then((d) => d.json()).then((d) => d)

    
}

const toCelsius = (temp) => { return Math.floor(temp - 273.15) }

const formatToLocalTime = (secs, offset, format = 'cccc, dd LLL yyyy') => DateTime.fromSeconds(secs + offset, { zone: 'utc' }).toFormat(format);

const iconCodeToUrl = (code) => {
    return `https://openweathermap.org/img/wn/${code}@2x.png`
}

const weatherData = (data) => {
    let {
        coord: { lon, lat },
        dt,
        main: { temp, feels_like, temp_min, temp_max,humidity }, name,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed },
        timezone: timeZone
    } = data

    let { main: weatherTitle, icon } = weather[0]
    const image = iconCodeToUrl(icon)
    const formattedLocalTime = formatToLocalTime(dt, timeZone);
    temp = toCelsius(temp);
    feels_like = toCelsius(feels_like);
    temp_min = toCelsius(temp_min);
    temp_max = toCelsius(temp_max);
    sunrise = formatToLocalTime(sunrise, timeZone, ' hh:mm a')
    sunset = formatToLocalTime(sunset, timeZone, ' hh:mm a')
    let BackgroundColor = formatToLocalTime(dt, timeZone, " a ")

    return { image, temp, temp_max, temp_min, sunrise, sunset, formattedLocalTime, lon, lat, name, country, speed, weatherTitle, feels_like, BackgroundColor, dt, timeZone ,humidity,icon}
}

const bodyData = async(currentTime, timezone, data,BackgroundColor) => {
    // hourly

    const hourly =  data.filter((f) => f.dt > currentTime).slice(0, 11).map((f) => ({
        temp: toCelsius(f.main.temp),
        icon: iconCodeToUrl(f.weather[0].icon),
        time: formatToLocalTime(f.dt, timezone, 'hh:mm a')
    }))

    // days
    const day =  data.filter((f) => f.dt_txt.slice(-8) === "00:00:00").map((f) => ({
        temp: toCelsius(f.main.temp),
        icon: iconCodeToUrl(f.weather[0].icon),
        time: formatToLocalTime(f.dt, timezone, 'cccc'), date: f.dt_txt.slice(8, 10)
    }))
    
//day Details
    const bing  =  (currentTime, timezone, data)=> {
        let k =[]
        for (let i = 0; i < 40; i++) {
             let value=
            data[i].dt_txt 
           value= value.slice(-8)
        //    console.log(value)
            if (value === "00:00:00") {
                k.push( data.slice(i, i+8).map((f) => ({
                    temp: toCelsius(f.main.temp),
                    icon: iconCodeToUrl(f.weather[0].icon),
                    time: formatToLocalTime(f.dt, timezone, 'hh:mm a')
                })))
             
            }
            // console.log(k)
            // if(i==39){
            //     break;
            //  }
        }
        
        return  k
    }
    const dayDetails= bing(currentTime, timezone, data)
    // console.log(dayDetails)
    return { hourly, day, dayDetails,BackgroundColor }
}


const mainReturn = async (city) => {
    const data = await api("weather", city).then((d)=>weatherData(d))
    // console.log(data)
   

    const { lat, lon, dt, timeZone,BackgroundColor } = data


    const bodyDetails = await BodyApi("forecast", lat, lon).then((d) => bodyData(dt, timeZone, d.list ,BackgroundColor))
    //api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
    // console.log(data2)
    //    const bodyWeather= weatherData(data2);
     
    return { ...data,...bodyDetails }
}

export default mainReturn
