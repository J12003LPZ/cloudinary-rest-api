import express from "express";
import cors from "cors";
import indexRoutes from "./routes/index.routes.js";
import cloudinaryRoutes from "./routes/cloudinary.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(indexRoutes);
app.use("/api", cloudinaryRoutes);

app.use((req, res, next) => {
  res.json({
    message: "Endpoint was not found",
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
