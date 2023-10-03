function isLeapYear(year) {
    // PLACEHOLDER_JAVASCRIPT_FUNCTION_BODY
    if ((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)){
          return "Yes";
          }
      else{
          return "No";
      }
  }

console.log(isLeapYear(2021));
  