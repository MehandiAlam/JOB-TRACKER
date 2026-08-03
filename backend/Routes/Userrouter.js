import express from "express";
import Usermodel from "../Models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import auth from "../middleware/auth.js";

const Userrouter = express.Router();


// ================= SIGNUP =================

Userrouter.post("/signup", async (req, res) => {
    try {

        const hashpassword = await bcrypt.hash(req.body.password, 10);

        const user = new Usermodel({
            ...req.body,
            password: hashpassword,
        });

        console.log("Before Save");

        const savedUser = await user.save();

        console.log("After Save");
        console.log(savedUser);

        return res.status(201).json({
            message: "User registered successfully",
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            message: error.message,
        });
    }
});


// ================= LOGIN =================

Userrouter.post("/login", async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await Usermodel.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        const ismatch = await bcrypt.compare(password, user.password);

        if (!ismatch) {
            return res.status(401).json({
                message: "Wrong Password",
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
            },
            process.env.JWT_SECRET
        );

        return res.status(200).json({
            message: "Login Success",
            token,
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            message: error.message,
        });
    }
});


// ================= PROFILE =================

Userrouter.get("/profile", auth, (req, res) => {

    return res.status(200).json({
        message: "Profile accessed successfully",
        user: req.user,
    });

});

export default Userrouter;