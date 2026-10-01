import{prisma}  from "../config/database.js";
export const createMovie=async(movieId:string,title:string)=>{
    const response=await prisma.movie.create({
       data:{
        title,
        movieId,
        processingStatus:"PENDING"
       }
    })
    console.log(response)
    return response;
}

export const updateMovieStatus=async(movieId:string,status:string)=>{
    const response=await prisma.movie.update({
        where:{
            movieId
        },
        data:{
            processingStatus:status
        }
    })
    return response;
}