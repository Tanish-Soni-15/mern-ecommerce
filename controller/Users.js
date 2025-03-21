import { User } from "../model/User.js";

const fetchUserById=async (req,res)=>{
    const {id} =req.params;
    try {
        const product = await User.findById(id,'email addresses role');
        res.status(200).json(product);
      } catch (err) {
        res.status(400).json(err);
      }

}
const updateUserById =async (req,res)=>{
    const id =req.params.id;
    try{
        const user=await User.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(user);
    }
    catch(err){
        res.status(400).json(err)
    }
}
export {fetchUserById,updateUserById};