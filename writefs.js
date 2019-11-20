var fs = require('fs');

fs.appendFile('file1', 'hi.. what\'s up', (err) => {
    if (err) throw err;
    console.log('The data  was written to file!');
  });