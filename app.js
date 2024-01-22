const moment = require('moment');

const dateyear = moment('2024-01-22');
const date1 = moment('2001-12-22');

const different = date1.diff(dateyear, 'days');
console.log(`sxvaoba: ${different}`);
