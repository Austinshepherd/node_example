const fs = require('fs');
const path = require('path');

Create folder

   fs.mkdir(path.join(__dirname, '/test'), {}, err =>{
       if(err) throw err;
       console.log('Folder created.....');
   });
//Create and write to file


fs.writeFile(path.join(__dirname, '/test', 'Hello.txt'), 'hello world!',
 err =>{

    if(err) throw err;
    console.log('File written to..');

//File append

    fs.appendFile(path.join(__dirname, '/test', 'Hello.txt'), 'I love Node.js',
err =>{

   if(err) throw err;
   console.log('File written to...');
   }
  );
 }
);


//Read a file


   fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) =>{
       if(err) throw err;
       console.log(data);
   });