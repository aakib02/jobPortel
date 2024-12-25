
import User from "../Model/userSchema.js";
import { generatetoken } from "../utils/jwt.js";
import { hashPassword, compareHashpassoword } from "../utils/password.js";



export const registerController = async (req, res) => {

    try {
        const { name, email, password,role, jobseeker, recruiter } = req.body

        console.log(req.body)
        // check user already registered 
        const existUser = await User.findOne({email})
        if (existUser) {
            return res.status(400).json({
                message: 'User already exists, please login',
            });
        }
            const hashedPassword = await hashPassword(password)
            const userdata = {
                name,
                email,
                password: hashedPassword,
                role

            }

            if (role === 'jobseeker') {
                const parsedJobseekerData = JSON.parse(jobseeker)
                userdata.jobseeker = {
                  ...parsedJobseekerData,
                  resume: req.file ? req.file.path : null,
                };
              }


            if (role === 'recruiter') 
                userdata.recruiter = recruiter;
            const user = await userSchema.create(userdata)


            if (user) {
                return res.status(201).json({
                    message: `${user.role} successfully registered`
                })
            }
            return res.status(500).json({
                message: 'Something went wrong during user creation',
              });
           
        
    } catch (error) {
        console.log('error in register',error);
        return res.status(500).json({
            message:"internal server error",
            error:error.message
        })
    }
};
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const checkUser = await User.findOne({email});
        if (!checkUser) {
            return res.status(400).json({ message: "You are not registered, please register." });
        }

        // Compare passwords
        const isMatchPassword = await compareHashpassoword(password, checkUser.password);
        if (!isMatchPassword) {
            return res.status(400).json({ message: "Email and password does not match." });
        }
        const token = generatetoken({role:checkUser.role,id:checkUser._id,name:checkUser.name})

        return res.status(200).json({
         message: "Login successful", data:token});
    }   catch (error) {
        // Handle unexpected errors
        console.error("error in register",error);
        return res.status(500).json({ message: "Something went wrong", error: error.message });
    }
};
















