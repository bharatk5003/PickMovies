import * as mongoose from 'mongoose';
import { CONSTANT } from 'src/utils/constant.utils';


export const databaseProviders =[
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (): Promise<void> => {
            try {
               console.log("Database Connected",CONSTANT.MONGO_URL);
               return mongoose
               .connect(CONSTANT.MONGO_URL)
               .then(()=>{
                console.log('Database Connect',CONSTANT.MONGO_URL);
               })

            } catch (error) {
                throw error;
            }
        }
    }
]