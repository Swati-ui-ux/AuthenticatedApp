const jwt = require("jsonwebtoken")

const authMiddleware = (req,res,next) => {
    const token = req.headers.authorization
    if (!token) return res.status(401).json({ message: "No teken found" })
    try {
        const varified = jwt.verify(token, "mysecretkey")
        req.user = varified
        next()
    } catch (error) {
        res.status(401).json({message:"Invalid token"})
    }
}

module.exports = authMiddleware