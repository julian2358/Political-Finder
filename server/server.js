const request = require('request');
const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const html = require('html')

//setup


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')))






// port and server setup
const port = process.env.PORT || 5640;
app.listen(port, () => {

    console.log(`this server is running on ${port}`)
})


// api


//submit button post request 
app.post('/representatives',(req, res) => {
   
   //api query
    const api_url= `https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyDOveHFIk2BsWevyQ4J6IO9b696e7iT59E&address=${req.body.adress}}`
//api call
request(api_url, { json: true}, function(err, response,body){
    if(err){
        
        
    }
    else{
    //api results
        let data =(body)
        console.log(body);
        res.json({ title: 'Data'})    }

})
})



