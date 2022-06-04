import { Profile } from "../database/models/Profiles";  
import { minioClient } from "./MinioService";

export const CProfile = async (req, res) => {
    console.log("profile request", req);

    await minioClient.putObject("doggr", req.file.originalname, req.file.buffer, (error, etag) => {
      if (error) {
        console.log(error);
        res.send(500).json({ message: "Not uploading" });
      } else {
        console.log("Succesfully uploaded");
  
      }
    }); 
};