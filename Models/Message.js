import { Timestamp } from "bson";
import { timeStamp } from "console";
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    messages:{
        type: Array,
        required: true,
    },
},
{
    timestamps: true,
});

const Message = mongoose.model('Message',messageSchema);
export default Message;