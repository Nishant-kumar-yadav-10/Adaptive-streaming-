import {Request,Response} from "express"

import { createMovie } from "../repositories/movie.repository.js";

export const uploadVideoController=async(req:Request,res:Response)=>{
   try {
     if(!req.file){
         res.status(400).json({
            success: false,
            message: 'No file uploaded'
        });
        return;
    }

    await createMovie(req.body.movieId,req.body.title)

    res.status(200).json({
        message:"file uploaded successfully"
    })
   } catch (error) {
    console.log(error)
   }
    
}
