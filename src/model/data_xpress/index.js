import { DataTypes } from "sequelize";
import {sequelize} from "../../db/index.js";

 const log  = sequelize.define('log',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    action:{
        type: DataTypes.STRING,    
    },
    transaction_id:{                                                                                                 
        type: DataTypes.STRING
    },
    message_id:{
        type: DataTypes.STRING
    },
    body:{
        type: DataTypes.TEXT
    },
    header:{
        type: DataTypes.TEXT
    },
    response:{
        type: DataTypes.TEXT
    },
    resheader:{
        type: DataTypes.TEXT
    },
    error:{
        type: DataTypes.TEXT
    }
},{
    timestamps:true,
    createdAt:"created_at",
    updatedAt:"updated_at"
}
)



 const seller  = sequelize.define('seller',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    company_name:{
        type: DataTypes.STRING,    
    },
    pan_name:{                                                                                                 
        type: DataTypes.STRING
    },
    pan_no:{
        type: DataTypes.STRING
    },
    pan_image:{
        type: DataTypes.STRING
    },
    gst_no:{
        type: DataTypes.STRING
    },
    contact_no:{
        type: DataTypes.STRING
    },
    street:{
        type: DataTypes.STRING
    },
    city:{
        type: DataTypes.STRING
    },
    area_code:{
        type: DataTypes.INTEGER
    },
    state:{
        type: DataTypes.STRING
    },
    latitude:{
        type: DataTypes.STRING
    },
    longitude:{
        type: DataTypes.STRING
    },
    provider_id:{
        type: DataTypes.STRING
    },
    personal_address:{
        type: DataTypes.STRING
    },
    address_proof_type:{
        type: DataTypes.STRING
    },
    address_proof_image:{
        type: DataTypes.STRING
    },
    upi_address:{
        type: DataTypes.STRING
    },
    bank_account:{
        type: DataTypes.STRING
    },
    ifsc_code:{
        type: DataTypes.STRING
    },
    beneficiary_name:{
        type: DataTypes.STRING
    },
    bank_name:{
        type: DataTypes.STRING
    },
    branch_name:{
        type: DataTypes.STRING
    },
    status:{
        type: DataTypes.BOOLEAN
    },
    approve_status:{
        type: DataTypes.INTEGER
    },
    short_description:{
        type: DataTypes.TEXT
    },
    description:{
        type: DataTypes.TEXT
    },
    seller_source:{
        type: DataTypes.STRING
    },
    domain:{
        type: DataTypes.STRING
    },
    token:{
        type: DataTypes.STRING
    },
    radius:{
        type: DataTypes.STRING
    },
    approve_status:{
        type: DataTypes.INTEGER
    }
},{
    timestamps:true,
    createdAt:"created_at",
    updatedAt:"updated_at"
}
)

const product  = sequelize.define('product',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    seller_id:{
        type: DataTypes.INTEGER                                                                                               
    },
    name:{
        type: DataTypes.STRING
    },
    position:{
        type: DataTypes.INTEGER
    },
    category_id:{
        type: DataTypes.INTEGER
    },
    ondc_product_id:{
        type: DataTypes.STRING
    },
    product_type:{
        type: DataTypes.STRING
    },
    short_description:{
        type: DataTypes.TEXT
    },
    description:{
        type: DataTypes.TEXT
    },
    mrp:{
        type: DataTypes.DOUBLE,    
    },
    selling_price:{                                                                                                 
        type: DataTypes.DOUBLE
    },
    tax_included_price:{
        type: DataTypes.DOUBLE
    },
    tax:{
        type: DataTypes.DOUBLE
    },
    tags:{
        type: DataTypes.TEXT
    },
    image:{
        type: DataTypes.TEXT
    },
    sku:{
        type: DataTypes.STRING
    },
    hsn:{
        type: DataTypes.STRING
    },
    returnable:{
        type: DataTypes.BOOLEAN
    },
    cancelable:{
        type: DataTypes.BOOLEAN
    },
    return_window:{
        type: DataTypes.STRING
    },
    seller_pickup_return:{
        type: DataTypes.BOOLEAN
    },
    time_to_ship:{
        type: DataTypes.STRING
    },
    cod:{
        type: DataTypes.BOOLEAN
    },
    replaceable:{
        type: DataTypes.BOOLEAN
    },
    status:{
        type: DataTypes.BOOLEAN
    },
    approve_status:{
        type: DataTypes.BOOLEAN
    },
    retail_approve_status:{
        type: DataTypes.INTEGER
    },
    pc_manufacturer_or_packer_name:{
        type: DataTypes.STRING
    },
    pf_brand_owner_FSSAI_license_no:{
        type: DataTypes.STRING
    },
    quantity:{
        type: DataTypes.INTEGER                                                                                               
    },
    uom:{
        type: DataTypes.STRING
    },
    country_of_origin:{
        type: DataTypes.STRING
    },
    customer_care_contact:{
        type: DataTypes.STRING
    },
    net_qty:{
        type: DataTypes.STRING
    },
    preservatives:{
        type: DataTypes.BOOLEAN
    },
    preservatives_details:{
        type: DataTypes.STRING                                                                                               
    },
    flavours_and_spices:{
        type: DataTypes.STRING
    },
    ready_to_cook:{
        type: DataTypes.BOOLEAN
    },
    ready_to_eat:{
        type: DataTypes.BOOLEAN
    },
    rice_grain_type:{
        type: DataTypes.STRING
    },
    recommended_age:{
        type: DataTypes.STRING
    },
    baby_weight:{
        type: DataTypes.STRING
    },
    absorption_duration:{
        type: DataTypes.STRING
    },
    scented_or_flavour:{
        type: DataTypes.STRING                                                                                               
    },
    herbal_or_ayurvedic:{
        type: DataTypes.STRING
    },
    theme_or_occasion_type:{
        type: DataTypes.STRING
    },
    hair_type:{
        type: DataTypes.STRING
    },
    mineral_source:{
        type: DataTypes.STRING
    },
    caffeine_content:{
        type: DataTypes.STRING                                                                                               
    },
    capacity:{
        type: DataTypes.STRING
    },
    decline_reason:{
        type: DataTypes.STRING
    },
    tax_included:{
        type: DataTypes.BOOLEAN
    },
    master_product_id:{
        type: DataTypes.INTEGER
    },
    product_type_name:{
        type: DataTypes.STRING                                                                                               
    },
    pc_common_or_generic_name_of_commodity:{
        type: DataTypes.STRING
    },
    pc_manufacturer_or_packer_address:{
        type: DataTypes.STRING
    },
    pc_month_year_of_manufacture_packing_import:{
        type: DataTypes.STRING
    },
    pc_multiple_product_name_number_of_quantity:{
        type: DataTypes.STRING
    },
    pc_imported_product_country_of_origin:{
        type: DataTypes.STRING
    },
    pf_nutritional_info:{
        type: DataTypes.STRING
    },
    pf_additives_info:{
        type: DataTypes.STRING                                                                                               
    },
    pf_other_FSSAI_license_no:{
        type: DataTypes.STRING
    },
    pf_importer_FSSAI_license_no:{
        type: DataTypes.STRING
    },
    weight:{
        type: DataTypes.STRING
    },
    brand:{
        type: DataTypes.INTEGER
    },
    reference_id:{
        type: DataTypes.STRING
    }

},{
    timestamps:true,
    createdAt:"created_at",
    updatedAt:"updated_at"
}
)






export { log,seller,product}