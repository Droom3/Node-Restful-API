require('dotenv').config();

const router = require('express').Router();
const fs = require('fs');
const AWS = require('aws-sdk');
const multer = require('multer')
const multerS3 = require('multer-s3')

const ID = process.env.AWS_ID;
const SECRET = process.env.AWS_SECRET;
const BUCKET_NAME = 'droom3';
const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: BUCKET_NAME,
        metadata: function(req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function(req, file, cb) {
            cb(null, `${file.originalname}`);
        }
    })
})

router.post('/', upload.array('photos', 3), function(req, res, next) {
    res.send(`Successfully uploaded ${req.files.length} files`);
});

module.exports = router;

// const uploadFile = (fileName) => {
//     const fileContent = fs.readFileSync(fileName);

//     const params = {
//         Bucket: BUCKET_NAME,
//         Key: fileName,
//         Body: fileContent
//     }

//     s3.upload(params, function(err, data){
//         if (err) {
//             throw err
//         }
//         console.log(`File uploaded successfully. ${data.Location}`);
//     })
// }

// uploadFile('pink-scooter.jpg')

// const s3 = new AWS.S3({
//     accessKeyId: ID,
//     secretAccessKey: SECRET
// });

// const params = {
//     Bucket: BUCKET_NAME,
//     CreateBucketConfiguration: {
//         LocationConstraint: "us-west-1"
//     }
// }

// s3.createBucket(params, function(err, data) {
//     if (err) console.log(err, err.stack);
//     else console.log('Bucket Created Successfully', data.Location);
//})

