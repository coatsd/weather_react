import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherReport from './WeatherReport';
import CurrentDay from './CurrentDay';
import ZipForm from './ZipForm';
import getApi from './GetAPIKey';

function App(props) {
    const [timezone, setTimezone] = useState('');
    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);

    const url = "http://api.openweathermap.org/data/2.5/onecall";
    const params = "&units=imperial";
    const apikey = "&appid=" + getApi();

    const onFormSubmit = (latlong) => {
        let [lat, long] = latlong.split(' ');
        let loc = '?lat=' + lat + '&lon=' + long;
        fetch(url + loc + params + apikey)
            .then(response => response.json())
            .then(({timezone: timezoneIn, daily: datesIn}) => {
                setTimezone(timezoneIn);
                setDates(datesIn);
                setSelectedDate(null);
            })
            .catch(error => alert(error));
    }

    const onDayClick = index => setSelectedDate(index);

    return (
        <div className="App">
            <ZipForm onSubmit ={onFormSubmit}  />
            <WeatherReport days ={dates} onDayClick={setSelectedDate} />
            {selectedDate !== null && 
            <CurrentDay timezone={timezone} day={dates[selectedDate]} />}
        </div>
    );
}

export default App;