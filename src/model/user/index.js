import { DataTypes } from "sequelize";
import {sequelize} from "../../db/index.js";

const User  = sequelize.define('users',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,    
    },
    email:{                                                                                                 
        type: DataTypes.STRING
    },
    contact_no:{
        type: DataTypes.INTEGER
    },
    password:{
        type: DataTypes.STRING
    },
    status:{
        type: DataTypes.BOOLEAN
    }

},{
    timestamps:true,
    createdAt:"created_At",
    updatedAt:"updated_At"
}
)

export default User;