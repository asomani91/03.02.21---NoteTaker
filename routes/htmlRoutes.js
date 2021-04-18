// IMPORT ITEMS NEEDED //
const router = require('express').Router();
const store = require('../db/store')
const path = require ("path")

// MAKE A GET REQUEST WITH ALL NOTES FROM THE DB //


    // => HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
  
    router.get('/notes', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
  
    // If no matching route is found default to home
    router.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/index.html'));
    });


module.exports = router;