import moment from "moment";

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));                  
console.log(moment().format("MMM Do YY")); 

console.log(moment().isValid("2020-01-01"));
console.log(moment().isValid("2020-14-01"));

console.log(moment().add(7, 'd'));
console.log(moment().add(7, 'M'));
console.log(moment().add(7, 'y'));
console.log(moment().subtract(7, 'd'));
console.log(moment().subtract(7, 'M'));
console.log(moment().subtract(7, 'y'));

console.log(moment().diff("2014-11-11" && "2015-09-11"));
console.log(moment().diff("2014-11-27" && "2015-09-16"));

console.log(moment("2020-01-01").isAfter("2018-01-01"));
console.log(moment("2010-01-01").isAfter("2018-01-01"));

console.log(moment([2019]).isLeapYear());
console.log(moment([2020]).isLeapYear());

