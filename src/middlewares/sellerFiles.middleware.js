import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./sellerUploads");
  },
  filename: (req, file, cb) => {
    cb(null,`${file.fieldname }_${Date.now()}${path.extname(file.originalname)}`);
  },
});
const sellerFile = multer({
  storage: storage,
}).single("imgSeller");

export default sellerFile;