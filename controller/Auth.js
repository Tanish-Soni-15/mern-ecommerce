import { User } from "../model/User.js"

const createUser = async (req, res) => {
    const user = new User(req.body);
    try {
        const docs = await user.save();
        res.status(201).json({ id: docs.id, email: docs.email, role: docs.role });
    }
    catch (err) {
        res.status(400).json(user);
    }
}
const checkUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email }).exec();
       
        
        if (!user) {
            res.status(401).json({ message: "no user found" })
        } else if (user.password === req.body.password) {
            res.status(200).json({ id: user._id, role: user.role, email: user.email })
        }
        else {
            res.status(401).json({ message: "Invalid user " })
        }
    }
    catch (err) {
        res.status(400).json(err)
    }
}

export { createUser,checkUser };