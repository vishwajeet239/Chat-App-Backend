import User from "../Models/User.js";
import bcrypt from "bcrypt";

const login = async (req, res) => {
    const {name,password} = req.body;
    try {
        let user = await User.findOne({name:name})
        if(!user) {
            return res.status(404).send({message:'User not found'});
        }
        const isMatch = await bcrypt.compare(user.password,password);
        if(!isMatch) {
            return res.status(400).send({message:'Invalid password'});
        }
        console.log(user);

    } catch (error) {
        res.status(500).json({message: "Server error", error: error });
    }
};

const logout = async (req, res) => {
    res.json({message: 'Log out successfully'});
};