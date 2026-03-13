const path = require('path');

const ext = path.extname(__filename);

console.log('확장자 : ', ext);

const parsredPath = path.parse(__filename);

console.log(`parsedPath : `, parsredPath);
