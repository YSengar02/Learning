import dotenv from 'dotenv';

dotenv.config();
const config ={

      username: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
      host: process.env.PGHOST,
      // port: process.env.PORT,
      pgport: process.env.PGPORT,
      sslMode:process.env.sslmode
      
    
  
};
export default config;

