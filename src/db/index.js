import { Sequelize } from "sequelize";
import config from "../config/index.js";
import fs from "fs";


export const sequelize = new Sequelize({ 
    database:config.database,
    username:config.username,
    password:config.password,   
    host:config.host,
    port: config.pgport,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
            sslmode: 'require'
        }
    }
}
  );
  sequelize.options.logging = false
  export const connectdb = async () => {
      try {
          await sequelize.authenticate(sequelize);
          console.log('database connected successfully !');
      } catch (error) {
          console.error('Unable to connect to the database:', error);
      }
  } 
  export const syncdb = async () => {
    try {
       await sequelize.sync();
        console.log("database synced");
    } catch (error) {
        console.log("im here", error);
    }
}  



