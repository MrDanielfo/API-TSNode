import app from './app';
import { connectDB } from './database/database';

async function main() {
     connectDB();
     await app.listen(app.get('port'), () => console.log(`Server ready on port ${app.get('port')}`));
}

main(); 


 

