const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinaryConfig');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'announcements', // Folder name in Cloudinary
    format: async (req, file) => 'jpg', // supports promises as well
    public_id: (req, file) => file.filename,
  },
});

const parser = multer({ storage: storage });

export default parser