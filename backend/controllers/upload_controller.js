const { S3Client, PutObjectCommand, DeleteObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

exports.getPresignedUrl = async (req, res) => {
  const { filename, fileType } = req.body;
  if (!filename || !fileType) {
    return res.status(400).json({ message: 'Filename and fileType are required.' });
  }

  // Sanitize filename
  const sanitizedFilename = filename.replace(/[^a-zA-Z0-9.-]/g, '_');
  const key = `uploads/${Date.now()}-${sanitizedFilename}`;
  
  try {
    const command = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key: key,
      ContentType: fileType,
      // ACL: 'public-read' // Uncomment if bucket ACLs are enabled and you want public read
    });
    
    const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
    
    // Construct public URL
    const publicUrl = `https://${process.env.S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
    
    res.json({ url, key, publicUrl });
  } catch (error) {
    console.error('S3 Presign Error:', error);
    res.status(500).json({ message: 'Error generating presigned URL.' });
  }
};

exports.deleteFile = async (req, res) => {
  const { key } = req.body;
  if (!key) {
    return res.status(400).json({ message: 'Key is required.' });
  }

  try {
    await s3.send(new DeleteObjectCommand({ Bucket: process.env.S3_BUCKET, Key: key }));
    res.json({ message: 'File deleted successfully.' });
  } catch (error) {
    console.error('S3 Delete Error:', error);
    res.status(500).json({ message: 'Error deleting file.' });
  }
};
