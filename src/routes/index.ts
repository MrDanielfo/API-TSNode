import { Router } from 'express';
const router = Router();
import multer from '../libs/multer';

import { createPhoto, getPhotos, getPhoto, deletePhoto, updatePhoto } from '../controllers/PhotoController'; 

router.get('/photos', getPhotos);
router.get('/photo/:id', getPhoto); 
router.post('/create-photo', multer.single('image'), createPhoto);
router.put('/photo/update/:id', updatePhoto); 
router.delete('/photo/delete/:id', deletePhoto); 


export default router; 
