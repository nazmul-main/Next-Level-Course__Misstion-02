const fs = require('fs');

// Reading file test
fs.readFile('./texts/read.txt', 'utf8', (err, data) => {
    if(err) {
        throw Error(err);
    }
    console.log(data);

    //writing file test
    fs.writeFile('./texts/read2.txt',data,'utf8', (err, data) => {
        if(err) {
            throw Error(err);
        }
        console.log(data);
    })
});
