function WeatherReportItem(props) {
	const showCurrentDay = () => {
        const index = props.index;
        const onDayClick = props.onDayClick;
        onDayClick(index);		
	}

	const {day} = this.props;
    const date = new Date(day.dt * 1000);

	return (
        <div className="weather-report-item" onClick= {this.showCurrentDay}>
        	<h2> {date.getMonth() + 1} / {date.getDate()} </h2>
        	<h3> {day.temp.min} &deg;F &#124;
            	{day.temp.max} &deg;F
        	</h3>
        </div>
	);
}

export default WeatherReportItem;