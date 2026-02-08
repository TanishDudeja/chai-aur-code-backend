import {V2 as cloudinary} from "cloudinary"
import fs from "fs"


import { v2 as cloudinary } from 'cloudinary';



    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.dxqppwppo , 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
        });
    import { v2 as cloudinary } from 'cloudinary';
import { response } from "express";


const uploadCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) return null
        //upload the file on cloudinary
        const respones = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        //file has been uploaded successfully
        console.log("file is uploaded on cloudinary " ,response.url );
        return respones;

    }catch(error){
        fs.unlinkSync(localFilePath) // remove the locally saved temporay file as the upload operation got failed
        return null;
    }
}

export {uploadCloudinary}
    