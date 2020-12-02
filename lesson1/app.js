// const {var22} = require('./dir/file2')
// console.log(var22);
//
// const {newst} =require('./dir/file2')
// let dimas = newst('vova',35)
// console.log(dimas);
//
// const {createUser} =require('./dir/file2')
// let voda = newst('test',38)
// console.log(voda);
//
//
// global.appRoot=__dirname
// console.log('_______');
// console.log(appRoot);
// console.log('_______');

// console.log('*************');
// console.log(process.cwd());
// console.log('***************');

// const fs = require('fs')
// const fsExtra = require('fs-extra')
// const path = require('path')

// const filePath = path.join(process.cwd() ,'dir','art.txt')


// fs.writeFile(filePath, 'MY FIRST MIGRATION ', err=>{
//     if (err){
//         console.log(err);
//     }
// } )

// дописуємо до файлів
// fs.appendFile(filePath, 'IM HERE \n MI TOO', err=>{
//     if (err){
//         console.log(err);
//     }
// })

// fs.mkdir(path.join(__dirname, 'zoom', 'fine', '19-09-84'), {recursive: true}, err=>{
//     console.log(err);
// })


//
// fsExtra.rmdir(path.join(__dirname, 'zoom'), {recursive: true}, function(err) {
//      if(err) console.log('error', err);
// });

// fs.readdir(path.join(process.cwd() , 'dir'),((err,files)=> {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(files);
//         }
//     }
// ))

//видалення файла
// fs.unlink(filePath,(err)=>{
//     console.log(err);
// })

//   перейменування

// const filePath = path.join(process.cwd() ,'dir','art.txt')
// let filePath = path.join(process.cwd(), 'dir', 'myArt.txt')
// let filePathNew = path.join(process.cwd(), 'dir', 'myArt2.txt')

// fs.rename(filePath,filePathNew,(err)=>{
//     console.log(err);
// })

// for (let i = 0; i < 10 ; i++){
//     fs.appendFile(filePath, "IM HERE \n ME too", err=>{
//         console.log(err);})
// }
// fs.readFile(filePath, (err, data) => {
//     console.log(data.toString());
// })

// const reedStreem = fs.createReadStream(filePath)
// const writeStream = fs.createWriteStream(filePathNew)

// reedStreem.on('data', (chank) => {
//     console.log(chank);
//     console.log('***********');
//     writeStream.write('TEST')
// })

//перенаправлення даних
// console.time('st')
// reedStreem.pipe(writeStream)
// console.timeEnd('st')

// const fs = require('fs')
// const path = require('path')

// const filePath = path.join(process.cwd() ,'2000','Dima.txt')
//
// const readStreem = fs.createReadStream(filePath)
// const writeStream = fs.createWriteStream(filePathNew)
// readStreem.pipe(writeStream)

// fs.readdir(path.join(process.cwd(),'2000'), ((err,files)=>{
//     if (err){
//         console.log(err);
//     } else {
// console.log(files);
//         files.forEach(file=>{
//                 console.log(file);
//                 fs.readFile(path.join(process.cwd(),'2000',file), (err1, data) =>{
//
//                const arr= data.toString()
//                 console.log(arr);
//                  return arr
//             })
//         }
//         )
//     }
// }))
// const filePath = path.join(process.cwd() ,'2000','Dima.txt')
// console.log(filePath);
//
// const readStreem = fs.createReadStream(filePath)
// const writeStream = fs.createWriteStream(filePathNew)
// readStreem.pipe(writeStream)


const fs = require('fs');
const path = require('path');

const path18 = path.join(process.cwd(),  '1800');
const path20 = path.join(process.cwd(),  '2000');

function change(oldPath, newPath){
fs.readdir((oldPath), ((err,files)=>{
    if (err){
        console.log(err);
    } else {
        files.forEach(file=>{
                fs.rename(path.join(oldPath,file),path.join(newPath, file), err1 =>{
                console.log(err1);
            })
        }
        )
    }
}))
}

change(path18 , path20 );
change(path20 , path18 );
