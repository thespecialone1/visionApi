const vision = require("@google-cloud/vision");
const express = require('express');
var fs = require("fs");


const app = express()
app.listen(5000, `127.0.0.1`, () => console.log('server running'));

const CREDENTIALS = JSON.parse(JSON.stringify('C:\\Users\\HP\\Documents\\GoogleVision\\orders-entity-362404-461fd96f9d69.json'));


const CONFIG = {
    Credentials: {
        private_key: CREDENTIALS.private_key,
        client_email: CREDENTIALS.client_email
    }
};

const client = new vision.ImageAnnotatorClient(CONFIG)


    const detectText = async(file_path) => {

        let [result] = await client.textDetection(file_path);
        
        console.log(result.textAnnotations[0].description);
    
    };

    detectText('1.PNG');



    // Set the type of annotation you want to perform on the image
    // https://cloud.google.com/vision/docs/reference/rpc/google.cloud.vision.v1#google.cloud.vision.v1.Feature.Type
    // const features = [{type: 'Text_Detection'}];
  
    // // Build the image request object for that one image. Note: for additional images you have to create
    // // additional image request objects and store them in a list to be used below.
    // const textDetect = {
    //   image: {
    //     source: {
    //       imageUri: 
    //     },
    //   },
    //   features: features,
    // };



// fs.writeFile("./object.json", JSON.stringify(result, null, 4), (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     };
//     console.log("File has been created");
// });







