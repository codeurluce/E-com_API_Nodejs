const multer = require('multer');
const path = require('path');

const MIME_TYPES = 
{
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
}
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '..', 'controllers', 'images'));
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_')
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + '.' + extension);
    }
});

module.exports = multer({ storage }).single('image');