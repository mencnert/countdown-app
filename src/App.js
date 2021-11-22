import React from 'react';
import './App.css';
import { formatDurationV2 } from "./utils"

function App() {
  const [duration, setDuration] = React.useState(0)
  const [time, setTime] = React.useState("")
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
      console.clear()
      console.log("T:    ", launch.toISOString())
      console.log("Now:  ", new Date(now).toISOString())
      const diff = Math.round((now - launch) / 1000);
      console.log("Diff: ", diff)
      setDuration(diff)
    }, 1000)

    return () => clearInterval(intervalId);
  }, [time])
  return (
    <div className="App">
      T {formatDurationV2(duration)}
    </div>
  );
}

export default App;
