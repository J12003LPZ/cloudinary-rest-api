import { Router } from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const router = Router();

cloudinary.config({
  cloud_name: "dakw2jqjp",
  api_key: "251974721971823",
  api_secret: "-Ugbkladcu0HavN48wxOBmMYz6k",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads",
    format: async (req, file) => "png", // Example: return 'png' for png files
    public_id: (req, file) => "computed-filename-using-request", // Example: return computed file name using the request object
  },
});

const upload = multer({ storage: storage });

router.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  return res.status(200).json({ url: req.file.path });
});

export default router;
