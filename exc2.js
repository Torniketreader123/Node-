const fs = require('fs');

const directory = 'i am king ';

fs.access(directory, fs.constants.F_OK, (err) => {
  if (err) {
    console.error(`${directory}  arsebobs`);
  } else {
    console.log(`${directory} ar arsebobs`);
  }
});
