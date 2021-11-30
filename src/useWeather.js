import React, {useEffect, useState} from 'react'
import axios from 'axios';

export default function useWeather() {

    const [weather, setWeather] = useState('')
    const [temp, setTemp] = useState('')
    const [feel, setFeel] = useState('')
    const [wind, setWind] = useState('')
    const [icon, setIcon] = useState('')
    const [description, setDescription] = useState('')
    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=3ff44f18e57daa08090e013fda247b2c`)
        .then(res => {
            setWeather(res.data)
            setTemp(res.data.main.temp)
            setFeel(res.data.main.feels_like)
            setWind(res.data.wind.speed)
            setIcon(res.data.weather[0].icon)
            setDescription(res.data.weather[0].description)
        })
        .catch(err => {
            console.log(err);
        })
        return () => {
        }
    }, [])

    let k = temp
    let celcius = k - 273.15

    let k2 = feel
    let celcius2 = k2 - 273.15
    var date = new Date(weather.dt*1000)

    return (
        <div>
            <div style={{justifyContent:'center', alignItems: 'center', display: 'flex'}}>Weather Data</div>
            <p style={{justifyContent:'center', alignItems: 'center', display: 'flex'}}>City: {weather.name}</p>
            <p style={{justifyContent:'center', alignItems: 'center', display: 'flex'}}>{date.toDateString()}</p>
            <p style={{justifyContent:'center', alignItems: 'center', display: 'flex'}}>{date.toTimeString()}</p>
            <p style={{justifyContent:'center', alignItems: 'center', display: 'flex'}}>Temperature: {celcius.toFixed(2)}&#8451;</p>
            <p style={{justifyContent:'center', alignItems: 'center', display: 'flex'}}>Feels Like: {celcius2.toFixed(2)}&#8451;</p>
            <p style={{justifyContent:'center', alignItems: 'center', display: 'flex'}}>Wind: {celcius2.toFixed(2)} meter/sec</p>
            <p style={{justifyContent:'center', alignItems: 'center', display: 'flex'}}>{description}:
            <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="icon"/>
            </p>
        </div>
    )
    
}

  