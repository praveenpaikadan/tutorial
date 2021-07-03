// const name = 'monoos'

// console.log(global)


// setTimeout(()=> {
//     console.log('Hola Amingo...');
//     clearInterval(int)
// }, 3000);

// const int  =setInterval(()=> {
//     console.log('Hola Monnnga...')
// }, 1000);

// console.log(__dirname);
// console.log(__filename);

// const pep = require('./people')
// const {people} = require('./people')

// console.log(people)

//------OS module
// const os = require('os')

// console.log(os.platform(), os.homedir(), os.hostname(), os)

//------FS module

const fs = require('fs')

// first param file path, secon param function to be fired on completing
// fs.readFile('./people.js', (err, data) => {
//     if (err){
//         console.log(err)
//     }
//     console.log(data.toString());

// })


// fs.writeFile('./mon.js', 'Monoose Jadayano..', () => {console.log('finished writing')})

// console.log('Mone.........')
// if (!fs.existsSync('./assets')){
// fs.mkdir('./assests', (err)=>{
//     if (err) {
//         console.log(err)
//     }else{
//         console.log('Created ')
//     }
// })}

// rmdir

// if (fs.existsSync('./mon.js')){
//     fs.unlink('./mon.js', (err) => {
//         if(err){
//             console.log('Failed')
//         }else{
//             console.log('kalanju Moneeeee.')
//         }
//     } )
// }


///// STREAMS AND BUFFERS

const readStream = fs.createReadStream('./lorem.txt', { encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./tes/ping.txt')

// readStream.on('data', (chunk) => {
//     console.log('----chunks ------');
//     writeStream.write('\nNew Chunk\n');
//     writeStream.write(chunk)
//     // console.log(chunk.toString());
// })
 
// piping directky read from readstream to writestream

readStream.pipe(writeStream)