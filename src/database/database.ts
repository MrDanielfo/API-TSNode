import mongoose from 'mongoose';
import { MONGO_URI } from './keys';

export const connectDB = async () => {
     try {
          await mongoose.connect(MONGO_URI, {
               useNewUrlParser: true,
               useCreateIndex: true,
               useFindAndModify: false,
               useUnifiedTopology: true
          });

          console.log('MongoDB Connected')
     } catch (err) {
          console.log(err.message);
          process.exit(1);
     }
}
