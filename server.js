import express from 'express'; // Importing express module
import { readFile } from "fs"; // Import readFile to read any file

const app = express(); // Creating an express object
const port = 8000; // Setting an port for this application

app.get('/', function (req, res) {

  readFile("multilevelJson.json", function(err, data) {
	
    // Check for errors
    if (err) throw err;
  
    // Converting to JSON
    const users = JSON.parse(data);
    
    console.log(users); // Print users
    res.send(users);
  });
})

// Starting server using listen function
app.listen(port, function (err) {
  if(err){
    console.log("Error while starting server");
  }
  else{
    console.log("Server has been started at "+port);
  }
})
