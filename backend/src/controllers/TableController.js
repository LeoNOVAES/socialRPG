const Table = require("../models/TableModels");
const User = require("../models/UsersModel");
const fs = require("fs");

module.exports = {

    async store(req,res){
        try{
            const { id } = req.headers;
            const { avatar } = req.files;
            let data = req.body;
            
            
            const user = await User.findById(id);
            if(!user.mestre) return res.status(401).json("Usuario nao e um mestre!");

            const exists = await Table.findOne({ name:data.name });
            if(exists) return res.status(400).json("Mesa com esse Nome Ja Existe");

            const date = new Date();
            const image = date.getTime() + "_" + avatar.originalFilename;
            const originPath = avatar.path;
            const destinyPath = "./src/static/tables/" + image + ".png"
            
            fs.rename(originPath, destinyPath, (err) => {
                if (err) return err;
            });

            data.idMestre = id;
            data.avatar = image;
            data.members = [data.idMestre];
            
            const table = await Table.create(data);
            
            return res.status(201).json({ message:"Mesa Criada com Sucesso!", mesa:table });
        
        }catch($e){
            return res.status(400).json($e.message);
        }
    },

    async indexOfState(req,res){
        try{
            const { state } = req.headers;
            const tables = await Table.find({ estado:state });
            return res.status(200).json(tables);
        }catch($e){
            return res.status(400).json("error inesperado");
        }
    },

    async delete(req,res){
        try{
            const { id, mestre } = req.headers;
            const table = await Table.findById(id);
            
            if(table.idMestre != mestre) return res.status(401).json("Voce nao e o mestre dessa mesa");
            await Table.findOneAndRemove({ _id:id});

            const path = "./src/static/tables/" + table.avatar + ".png";

            fs.unlink(path, (err) => {
                console.log(err)
            });

            return res.status(200).json("Deletado com sucesso");

        }catch($e){
            return res.status(400).json("erro inesperado");
        }
    }
}