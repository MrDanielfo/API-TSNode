import { Schema, model, Document } from 'mongoose'; 

const PhotoSchema = new Schema({
     title: {
          type: String,
          required: true
     },
     description: {
          type: String,
          required: false
     },
     imagePath: {
          type: String
     }
});

interface IPhoto extends Document {
     title: string;
     description: string;
     imagePath: string; 
}

export const Photo = model<IPhoto>('Photo', PhotoSchema);








