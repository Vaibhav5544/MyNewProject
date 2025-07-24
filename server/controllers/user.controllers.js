import {User} from "../models/user.model.js";
import bcrypt from "bcryptjs"
import { generateToken } from "../utils/generateToken.js";
export const register=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        if(!name||!email||!password){
            return res.status(400).json({
                success:false,
                message:"All field are required" 
            })

        }
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                success:false,
                message:"User already exist with this email."
            })
        }
        const hashedPassword =await bcrypt.hash(password,10);
        await User.create({
            name,     
            email,
            password:hashedPassword
        });
        return res.status(201).json({
            success:true,
            message:"Account created successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message :"failed to register"
        })
        
    }
    
    



}




export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login Input:", { email, password });

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await User.findOne({ email });
    console.log("Fetched user:", user);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Incorrect email or password.",
      });
    }


    const isPasswordMatch = await bcrypt.compare(password, user.password);
    console.log("Password Match:", isPasswordMatch);

    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Incorrect email or password.",
      });
    }

    generateToken(res, user, `Welcome back ${user.name}`);
  } catch (error) {
    console.error(" Login Error:", error); // Show real error
    return res.status(500).json({
      success: false,
      message: "Failed to login",
    });
  }
};
