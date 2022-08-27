export function sqlTimestampToJs(date) {
  var t = date.split(/[- :]/);
  var newDate = new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4], t[5]));
  return newDate;
}

export function addMonthToDate(date) {
  const currentDate = new Date(date);
  const newDate = currentDate.setMonth(date.getMonth() + 1);
  return newDate;
}
