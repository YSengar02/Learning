import User from "../../../model/user/index.js";
import bcrypt from "bcrypt"; 
import jwt from "jsonwebtoken"
import { signJwtToken } from "../middleware/index.js";

class UserController {
  async userSignup(req, resp) {
    try {
      await User.sync();
      const { name, email, contact_no, status, password } = req.body;
      const data = {
        name,
        email: email.toLowerCase(),
        contact_no,
        status,
        password: await bcrypt.hash(password, 10),
      };
      console.log(">>>>>>>>>>>>>", data);
      const existingUser = await User.findOne({
        where: {
          email,
        },
      });
      if (existingUser) {
        console.log("User already exist");
        resp.status(200).json({
          message: "User already exist",
          status: 200,
        });
      } else {
        const createUser = await User.create(data);
        console.log("User created successfully.............", createUser);
        resp.status(200).json({
          message: "User created successfully",
          status: 200,
          data: createUser,
        });
      }
    } catch (error) {
      console.error(error);
      resp.status(404).json({
        message: "Invalid signup",
      });
    }
  }

  async userLogin(req, resp) {
    try {
      const { email, password } = req.body;
      const data = {
        email,
        password,
      };
      if(!data){
        resp.status(200).send("User input is Invalid")
    }
      const CheckUser = await User.findOne({
        where: {
          email,
        },
      });
      const match= await bcrypt.compare(password,CheckUser.password);
      if (match) {
        // const {name,email,contact_no,status}= CheckUser;
        const generateToken= await signJwtToken({CheckUser})
        // console.log(generateToken);
        console.log("User Login successfully.............");
        resp.status(200).json({
          message: "User Login successfully.............",
          status: 200,
          token:generateToken
        });
      }
    } catch (error) {
      console.error(error);
      resp.status(200).json({
        message: "Invalid User ",
        status: 200,
      });
    }
  }

  async userUpdate(req, resp) {
    try {
    } catch (error) {}
  }

  async userDelete(req, resp) {
    try {
    } catch (error) {}
  }

  async Getall_user(req, resp) {}
}
export default new UserController();

// try {
//     const { email, password } = req.body;

//     // Check if a user with the provided email exists
//     let existingUser = await User.findOne({ where: { email } });

//     if (existingUser) {
//       // User exists, so we'll attempt to log them in
//       const isPasswordValid = await bcrypt.compare(password, existingUser.password);

//       if (isPasswordValid) {
//         // Password is correct, generate a JWT token and send it
//         const token = jwt.sign({ userId: existingUser.id }, 'your-secret-key', { expiresIn: '1h' });
//         res.json({ user: existingUser, token });
//       } else {
//         // Password is incorrect
//         res.status(401).json({ error: 'Invalid credentials' });
//       }
//     } else {
//       // User doesn't exist, so we'll create a new one
//       const hashedPassword = await bcrypt.hash(password, 10);
//       const newUser = await User.create({ email, password: hashedPassword });

//       // Generate a JWT token and send it
//       const token = jwt.sign({ userId: newUser.id }, 'your-secret-key', { expiresIn: '1h' });
//       res.json({ user: newUser, token });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error registering or logging in user' });
//   }
