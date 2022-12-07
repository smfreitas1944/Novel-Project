//const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = require('./middleware/logEvents');

//round 3 below
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

//initialize object
const myEmitter = new MyEmitter();

// add listener for the log event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(()=> {
    //emit event
    myEmitter.emit('log', 'log event emitted!');
}, 2000) 





//round 2 below this
//const fileOps = async () => {
//    try{
//        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'official.txt'), 'utf8');
//        console.log(data);
//        await fsPromises.unlink(path.join(__dirname, 'files', 'official.txt')); // deletes
//        await fsPromises.writeFile(path.join(__dirname, 'files', 'promise.txt'), data);
//        await fsPromises.appendFile(path.join(__dirname, 'files', 'promise.txt'), '\n\nText to append');
//    } catch (err){
//        console.error(err);
//    }
//}

//fileOps();

//round 1 below

//fs.readFile(path.join(__dirname, 'files', 'official.txt'), (err, data) => {
//    if (err) throw err;
//    console.log(data.toString());
//})

//fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Text to be Written', (err) => {
//    if (err) throw err;
//    console.log('Write Complete');

//    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), 'Text to be Added', (err) => {
//        if (err) throw err;
//        console.log('Append Complete');
//    })

//    fs.renameFile(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newreply.txt'), (err) => {
//        if (err) throw err;
//        console.log('Rename Complete');
//    })
//})

//fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), 'Text to be Added', (err) => {
//    if (err) throw err;
//    console.log('Append Complete');
//})

// exit on uncaught errors
//process.on('uncaughtException', err => {
//    console.error('There was an uncaught error: $(err)');
//    process.exit(1);
//})