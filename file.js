//Reading files
const fs = require('fs');
fs.readFile('./docs/blog1.txt',(err,data) => {
if(err){
    console.log(err)
}
console.log(data.toString())
});



//Writing files
fs.writeFile('./docs/blog1.text','Hello world', ()=> {
    console.log('File written');
    });
    fs.writeFile('./docs/blog2.text','Hello world', ()=> {
        console.log('File written');
        });
// directories
if(!fs.existsSync('./assets'))
fs.mkdir('./assets',(err) => {
    if(err){
        console.log(err)
    }
    console.log('folder created')
});
else {
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err)
        }
        console.log("Deleted file")
    })
}
