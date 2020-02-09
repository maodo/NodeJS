const fs = require('fs');
const getNotes = function (filename) {
    fs.readFile(filename+'.txt','utf8',function (err,data) {

        if(err) throw err
        console.log(data);
    })
}

module.exports = getNotes;