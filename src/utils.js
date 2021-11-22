export const formatDurationV2 = (secs) => {
  const sign = secs >= 0 ? "+" : "-"
  secs = secs < 0 ? secs * -1 : secs
  var days = Math.floor(secs / 86400);
  var hours = Math.floor((secs - (days * 86400)) / 3600);
  var minutes = Math.floor((secs - (days * 86400) - (hours * 3600)) / 60);
  var seconds = secs - (days * 86400) - (hours * 3600) - (minutes * 60);

  if (days < 10) { days = "0" + days; }
  if (hours < 10) { hours = "0" + hours; }
  if (minutes < 10) { minutes = "0" + minutes; }
  if (seconds < 10) { seconds = "0" + seconds; }
  return `${sign} ${days}d ${hours}h ${minutes}m ${seconds}s`
}