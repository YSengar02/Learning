import pincode from "../../../model/orders";

class orderController{
    async pinCode(req,res){
        try {
            const checkpin= pincode.findOrCreate()
        } catch (error) {
            console.log(error);
            res.status(404).json({
                error:true,
                message: error.message
            })
        }
    }
}