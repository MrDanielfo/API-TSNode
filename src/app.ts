import express from 'express';
import morgan from 'morgan';
import routes from './routes/index'; 
import path from 'path';

const app = express();

app.set('port', process.env.PORT || 4000);
// Middlewares
app.use(morgan('dev')); 
app.use(express.json());
// routes
app.use('/api', routes); 
// upload images
app.use('/uploads', express.static(path.resolve('uploads')))

export default app;



