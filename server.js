
// web server things
const express = require('express')
const app = express()

// filesystem (to browse local files)
const fs = require('fs')


// everything in this folder gets sent to browser as is
app.use(express.static('./public'))

// everything in this folder is converted from Jade to HTML
// and then gets sent to browser
let jade_folder = './jade'
app.set('views', jade_folder)
app.set('view engine', 'pug')
fs.readdir(jade_folder, (err, files_read) => {

  if (err || files_read === undefined) { 
    console.log(`Couldn't list files in ${jade_folder}`)
    return 
  }

  files_read.forEach((file) => {

    let url = '/' + file.split('.')[0]
    console.log(`+ Found ${file} -> ${url}`)
    
    // use filenames as URL's
    app.use(url, (req, res) => {
        console.log(`> Rendering URL ${url} from ${jade_folder}/${file}`)
        res.render(file)
    })
    
  })
})


// run the server with a port
const server = app.listen(8080, () => {
  console.log(`Server running: localhost:${server.address().port}`);
});