const fs = require('fs')

let results = (path) => {
  fs.readFile(path, 'utf8', function(err, contents) {
    console.log(contents)
  })
}
results('./helloworld.txt')
