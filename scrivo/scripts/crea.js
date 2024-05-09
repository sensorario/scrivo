const fs = require('fs');

const filePath = 'example.txt';
const fileContent = 'This is the content of the file.';

fs.writeFile(filePath, fileContent, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('File created successfully!');
});
