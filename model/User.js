import mongoose from "mongoose";

const {Schema}=mongoose;
const userSchema = new Schema({
    email: { type : String, required: true, unique: true},
    password: { type : String, required: true},
    addresses:{type:[Schema.Types.Mixed]},
    role:{type:String}
    
})
userSchema.virtual("id").get(function () {
    return this._id.toHexString(); // Ensure it converts correctly
});

// Ensure virtuals are included in JSON output
userSchema.set("toJSON", {
    virtuals: true, 
    versionKey: false,
    getters: true, // Important to include virtuals
    transform: function (doc, ret) {
        delete ret._id; // Remove _id to avoid duplication
    }
});

const  User = mongoose.model('User',userSchema);
export {User};