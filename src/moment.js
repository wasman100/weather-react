let newDate = new Date();
const weekday = reading.dt * 1000
newDate.setTime(weekday)

moment(newDate).format(“MMMM Do, h:mm a”)