import Jwt  from "jsonwebtoken";

export const signJwtToken= async(data)=>{
    const token = Jwt.sign({
        data 
    },"12345",{expiresIn:'8hr'});
    return token
}

export const headerverify= async(req,resp,next)=>{
    try {
        const decode= Jwt.verify(req.headers.authorization,'secret')
        if(decode){
            next();
        }
        else{
            resp.status(200).json({
                message:"A token is require for authentication",
                status: 403
            })
        }

    } catch (error) {
        resp.status(200).json({
            message:"Invalid Token",
            status:400
        })
        
    }
}