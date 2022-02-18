import React, { Component } from 'react';

function CurrentDay(props) {
    let getWeekDay = (day) => 
    {
        const days = [
            "Sunday", 
            "Monday", 
            "Tuesday", 
            "Wednesday", 
            "Thursday", 
            "Friday", 
            "Saturday"
        ];
        return days[day];
    }

    const city = props.city;
    const day = props.day;
    let date = new Date(day.dt * 1000);
    const weekday = getWeekDay(date.getDay());
    const icon = day.weather[0].icon;
    const desc = day.weather[0].description;
    const temps = day.temp;

    return ( 
        <div className="current-day">
            <h1 className="day-header">{weekday} in {city.name}</h1>
            <div className="weather">
                <p>
                  <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={desc}/>
                  {desc}
                </p>
            </div>
            <div className="details flex-parent">
                <div className="temperature-breakdown">
                    <p>Morning Temperature: {temps.morn} &deg;F</p>
                    <p>Day Temperature: {temps.day} &deg;F</p>
                    <p>Evening Temperature: {temps.eve} &deg;F</p>
                    <p>Night Temperature: {temps.night} &deg;F</p>
                </div>
            </div>
        </div>
    );
}

export default CurrentDay;