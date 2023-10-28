import { Sequelize } from "sequelize";
import { sequelize } from "../../db/index.js";

const pincode= sequelize.define("pincode_servicability",{
    location:{
        type: Sequelize
    },
    isServicable:{
        type: Sequelize
    }
})
export default pincode;