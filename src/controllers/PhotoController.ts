import { Request, Response } from 'express'; 
import { Photo } from '../models/Photo';
import path from 'path'; 
import fs from 'fs-extra'; 

export const getPhotos = async (req: Request, res: Response): Promise<Response> => {
     const photos = await Photo.find(); 
     if(photos.length === 0) {
          return res.json({
               message: "No photos in the storage"
          });
     }
     return res.json(photos);
}

export const createPhoto = async (req: Request, res: Response): Promise<Response> => {
     const { title, description } = req.body;
     const { path } = req.file
     const newPhoto = {
          title,
          description,
          imagePath: path
     }
     const photo = await new Photo(newPhoto).save();
     
     return res.json({
          message: "Photo succesfully saved",
          photo
     })
}

export const getPhoto = async (req: Request, res: Response): Promise<Response> => {
     const { id } = req.params;
     const photo = await Photo.findOne({_id: id });
     return res.json({
          photo
     }); 
}

export const updatePhoto = async (req: Request, res: Response): Promise<Response> => {
     const { id } = req.params;
     const { title, description } = req.body;
     const photo = await Photo.findOneAndUpdate({_id: id}, {title, description});
     return res.json({
          message: "Photo updated successfully",
          photo
     }); 

}

export const deletePhoto = async (req: Request, res: Response): Promise<Response> => {
     const { id } = req.params;
     const photo = await Photo.findOneAndDelete({_id: id });
     if(photo) {
          await fs.unlink(path.resolve(photo.imagePath))
     }
     return res.json({
          message: "Photo was deleted succesfully"
     }); 
}