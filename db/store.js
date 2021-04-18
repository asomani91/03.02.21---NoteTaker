var fs = require('fs');
var lis = [{
    "title": "Test Title",
    "text": "Test text"
}, {
    "title": "Test Title 1",
    "text": "Test text 1"
}];

function getNotes() {
    const dataBuffer = fs.readFile('./db/db.json', function (err, data) {
        if (err) throw err
        lis = JSON.parse(data)
    })
    //const dataJSON = dataBuffer.toString()
    lis = dataJSON
    return Promise.resolve(lis)
}

function saveNotes(j) {
    lis.push(j)

}

module.exports = { g: getNotes, j: saveNotes }