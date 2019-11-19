const {Schema, model} = require("mongoose");

const TableSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    idMestre:{
        type: Schema.Types.ObjectId,
        ref:'Users'
    },
    bio:String,
    limit:{
        type:Number,
        required:true
    },
    avatar:{
        type:String,
        required:true
    },
    estado:{
        type:String,
        required:true
    },
    requests:[{
        type:Schema.Types.ObjectId,
        ref:'Users'
    }],
    members: [{
         type: Schema.Types.ObjectId,
         ref: 'Users'
    }]
},{
    timestamps:true
});

module.exports = model('Tables', TableSchema);