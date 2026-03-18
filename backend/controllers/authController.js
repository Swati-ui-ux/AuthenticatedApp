const User = require("../models/User")
const jwt = require("jsonwebtoken")

const bcrypt = require("bcrypt")

async function signup(req,res) {
    try {
        const { name, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10)
    const user = new User({
        name,
        email,
        password:hash
    })
    await user.save()
    res.json({message:"User created"})
    } catch (error) {
        res.status(500).josn({error:error.message})
    }
}

async function login(req,res){
try {
    const { email, password } = req.body
    // user check 
    const user = await User.findOne({ email });
    if (!user) {
    return res.status(400).json({message:"User not found"})
    }
    
    // password check 
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid password" })
    }
    
    // JWT Token genrate
    const token = jwt.sign(
        { id: user._id },
        "mysecretkey",
        {expiresIn:"1d"}
    )
    res.json({message:"Login successful",token,user})
    
} catch (error) {
    res.status(500).json({error:error.message})
}
}

module.exports = {signup,login}