import "./style.css";
// 获取当前月份
// 获取

const getDate = (year: number, month: number, dayOfMonth: number) => {
  const date = new Date(year, month - 1, dayOfMonth);
  return date;
};

const Calendar = () => {
  const preMonthDate = getDate(2024, 3, 0);
  const preDayOfMonth = preMonthDate.getDate();
  const preMonth = preMonthDate.getMonth() + 1;
  const firstMonthDate = getDate(2024, 3, 1);
  const month = firstMonthDate.getMonth() + 1;
  const endMonthDate = getDate(2024, 4, 0);
  const endMonthDay = endMonthDate.getDate();

  const firstMonthDayOfWeek = firstMonthDate.getDay();
  const week = new Array(firstMonthDayOfWeek)
    .fill(1)
    .map((__, idx) => {
      return {
        date: preDayOfMonth - idx,
        month: preMonth,
      };
    })
    .reverse();

  const fullOneMonth = new Array(endMonthDay)
    .fill(1)
    .map((__, idx) => idx + 1)
    .reduce((prev, curr) => {
      return [...prev, { date: curr, month }];
    }, week);
  return (
    <div className="container">
      {fullOneMonth.map(({ date, month }) => {
        return (
          <div key={`${month}_${date}`} className="item">
            {date}
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;
