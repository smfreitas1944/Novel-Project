//for large text files
const fs = require('fs');

const rs = fs.createReadStream(path.join(__dirname, 'files', 'lorem.txt'), (encoding => 'utf8'));

const ws = fs.createWriteStream(path.join(__dirname, 'files', 'newlorem.txt'));

//same as pipe below

//rs.on('data', (dataChunk) => {
//    ws.write(dataChunk);
//})

rs.pipe(ws);