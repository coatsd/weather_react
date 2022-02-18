import WeatherReportItem from './WeatherReportItem';

function WeatherReport(props) {
	const { days } = props;
	return (
		<div className="weather-report flex-parent">
            { days.map((day, index) =>
                <WeatherReportItem
                    key={day.dt}
                    day={day}
                    index={index} 
                    onDayClick={props.onDayClick}
                     />) }
        </div>
	);
}

export default WeatherReport;