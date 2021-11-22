import React from 'react';
import './App.css';
import { formatDurationV2 } from "./utils"

function App() {
  const [duration, setDuration] = React.useState(0)
  const [time, setTime] = React.useState("")
  const [pickedTime, setPickedTime] = React.useState("")
  const pickDateTime = (e) => {
    setPickedTime(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    window.location.search = `?T=${pickedTime}`
  }
  React.useEffect(() => {
    var url_string = window.location.href
    var url = new URL(url_string);
    var c = url.searchParams.get("T");
    setTime(c)
  }, [])
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const launch = new Date(time)
      const now = Date.now()
      const diff = Math.round((now - launch) / 1000);
      console.clear()
      console.log("T:    ", launch.toISOString())
      console.log("Now:  ", new Date(now).toISOString())
      console.log("Dur:  ", formatDurationV2(diff))
      console.log("Diff: ", diff)
      setDuration(diff)
    }, 1000)

    return () => clearInterval(intervalId);
  }, [time])

  if (time) {
    return (
      <div className="App">
        T {formatDurationV2(duration)}
      </div>
    );
  } else {
    return (
      <div className="App">
        <form onSubmit={onSubmit}>
          <input type="datetime-local" value={pickedTime} onChange={pickDateTime} required />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}


export default App;
