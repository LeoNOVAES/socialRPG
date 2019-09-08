const {Schema, model} = require("mongoose");

const UsersSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    bio:String,
    avatar:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    mestre:{
        type:Boolean,
        required:true
    },
    estado:{
        type:String,
        required:true
    },
    likes:[{
        type:Schema.Types.ObjectId,
        ref:'Tables'
    }],
    dislikes:[{
        type: Schema.Types.ObjectId,
        ref: 'Tables'
    }]
},{
    timestamps:true
});

module.exports = model('Users', UsersSchema);