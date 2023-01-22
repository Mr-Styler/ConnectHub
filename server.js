const mongoose = require('mongoose')
const app = require('./app');
const multer = require('multer');




const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public');
    },
    filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    cb(null, `images/${file.fieldname}-${Date.now()}.${ext}`)
}
  });

  const fileFilter = (req, file, cb) => {
    if (
      file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(new Error('Not an image'), false);
    }
  };

  const upload = multer({
    storage: fileStorage,
    fileFilter: fileFilter
})




mongoose.connect("mongodb://localhost/ConnectHub").then(()=> console.log("DB connection successfull")).catch((err)=>{console.log(err)});

app.listen(2525, ()=>{
    console.log(`Running ConnectHub on port: 2525`)
})