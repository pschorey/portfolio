export default function returnYearsMonthsDays (monthDayYearStr, endDate) { 
    let then = new Date(monthDayYearStr);
    let thenYears = then.getFullYear();
    let thenMonths = then.getMonth() + 1;
    let thenDays = then.getDate();

    let today = new Date();
    if (endDate) {
      today = new Date(endDate)
    }

    let todayYears = today.getFullYear();
    let todayMonths = today.getMonth() + 1;
    let todayDays = today.getDate();

    let getMonthsDiff = (thenMonths, todayMonths, thenDays, todayDays) => {
      let netMonths = todayMonths >= thenMonths ? todayMonths - thenMonths : 12 - (thenMonths - todayMonths);
      let netDays = todayDays - thenDays;
      //same month
      if (netMonths === 0) {
        return 0;
      }
      //rounds the month down, (days less in next month)
      else if (netMonths >= 1 && netDays < 0) {
        return netMonths - 1;
      }
       else {
        return netMonths;
      }
    }
    let monthsDiff = getMonthsDiff(thenMonths, todayMonths, thenDays, todayDays);

    let getYearsDiff = (thenYears, todayYears, monthsDiff, thenDays, todayDays) => {
      if (monthsDiff === 0 && todayDays <= thenDays) {
        return todayYears - thenYears
      } else if (monthsDiff >= 1) {
        return todayYears - thenYears
      } else {
        return todayYears - thenYears - 1
      }
      /*
      return (monthsDiff === 0 && todayDays >= thenDays) ? todayYears - thenYears : monthsDiff >= 1 ? todayYears - thenYears : todayYears - thenYears - 1;
      */
    }
    let yearsDiff = getYearsDiff(thenYears, todayYears, monthsDiff, thenDays, todayDays);

    let getDaysDiff = (thenMonths, todayMonths, thenDays, todayDays) => {
      let daysInMonth =  new Date(todayYears, todayMonths, 0).getDate(); //daysInMonth method from https://stackoverflow.com/questions/315760/what-is-the-best-way-to-determine-the-number-of-days-in-a-month-with-javascript 
      return todayDays >= thenDays ? todayDays - thenDays : daysInMonth + todayDays - thenDays;
    }
    let daysDiff = getDaysDiff(thenMonths, todayMonths, thenDays, todayDays);
  
    return [yearsDiff, monthsDiff, daysDiff]
}
		