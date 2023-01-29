# lohiv-linkmanager

### This code handles the shortened URLs and points them to the correct files

You need to have a .env file with the credentials to your SQL database  
Currently the path where the uploaded files are stored is hardcoded in, so you need to make sure change that in `./routes/f.js`

Install the dependecies:  
`npm i`  

To run:  
`npm test`  

---
### Functionality:
The current way this works is when a request is made to https://example.com/f/xxxxxx the program takes the link ID from the url, 
tests if it's in a valid format and tries to find it from the database. If it finds it, it either displays the file, if it's an image or downloads it if it's some other file.
This is done so that embedding works on images and videos on social media apps.  

There is metadata in the databse that indicates the stored filetype and or if there are multiple files uploaded. The multi file functionality is currently disabled due to it not being finished.
