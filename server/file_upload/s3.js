const aws = require("aws-sdk");
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config();

const region = process.env.AWS_REGION;
const bucketName = process.env.AWS_BUCKET_NAME;
const accessKeyid = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_AWS_SECRET_ACCESS_KEY;

const s3 = new aws.S3({
  region,
  accessKeyid,
  secretAccessKey,
  signatureVersion: "v4",
});

//upload file to s3

function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
  };

  return s3.upload(uploadParams).promise();
}

module.exports = { uploadFile };
