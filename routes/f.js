const express = require('express');
const router = express.Router();
const fs = require("fs");
const path = require('path');

// Hard coded filepath
const BASEPATH = "/usr/mnt/"

// Get validator module and use the url validator
const validator = require('../validator');
const urlValidator = validator.validateUrl;

// database connection
const db = require('../db');

// Get root
router.get('/', function(req, res) {
    // Send status code
    res.sendStatus(403);
});

// file get
router.get('/:id', function(req, res) {

    // Get uid from url
    var uid = req.params.id;

    // Validate url
    if(urlValidator(uid)){

        // Find url in base
        db.query('SELECT * FROM links WHERE link = ?', [uid], function(error, results, fields) {
            // If there is an issue with the query, output the error
            if (error) throw error;

            // If the data exists
            if (results.length > 0) {

                var parsedPath = path.join(BASEPATH, results[0].filepath);
                
                //console.log(results[0].filepath);

                // Get files from directory
                var files = fs.readdirSync(parsedPath);
                //console.log(files);

                if(results[0].type == "media"){
                    // Display the file instead
                    //res.sendFile(path.join(parsedPath, files[0]));
			  res.send("hello");
                } else {
                    // Download the file
                    res.download(path.join(parsedPath, files[0]), files[0]);
                }

                
                /*if(results[0].multiple){
                    
                    // Render multi file view page with filenames
                    res.render("pages/filelist", {
                        filelist: files
                    });
                } else {

                    if(results[0].type == "media"){
                        // Display the file instead
                        res.sendFile(path.join(parsedPath, files[0]));
                    } else {
                        // Download the file
                        res.download(path.join(parsedPath, files[0]), files[0]);
                    }
                }*/

            } else {
                // TODO flash this
                res.sendStatus(404);
            }
        });
    } else {
        // TODO flash this
        res.sendStatus(404);
    }
    //res.send(urlValidator(req.params.id));
});

module.exports = router;