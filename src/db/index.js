import { Sequelize } from "sequelize";
import config from "../config/index.js";

export const sequelize = new Sequelize({ 
    database:config.database,
    username:config.username,
    password:config.password,   
    host:config.host,
    dialect: 'postgres',
    // dialectOptions:{
    //     ssl:false
    // }
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



