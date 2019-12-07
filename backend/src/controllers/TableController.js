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

            if(avatar){
                const date = new Date();
                const image = date.getTime() + "_" + avatar.originalFilename;
                const originPath = avatar.path;
                const destinyPath = "./src/static/tables/" + image + ".png"

                fs.rename(originPath, destinyPath, (err) => {
                    if (err) return err;
                });

                data.avatar = image;
            }else{
                data.avatar = "default";
            }
        
            data.idMestre = id;
            data.members = [data.idMestre];
            
            const table = await Table.create(data);
            
            return res.status(201).json({ message:"Mesa Criada com Sucesso!", mesa:table });
        
        }catch($e){
            return res.status(400).json($e.message);
        }
    },

    async indexTable(req,res){
        const { user,idtable } = req.headers;
        const table = await Table.findById(idtable);
            
        if(table.idMestre != user){
            return  res.status(403).json("Nao autorizado");
        }

        return res.status(200).json(table);

    },

    async indexOfState(req,res){
        try{
            const { state,iduser } = req.headers;

            let tables = await Table.find({ estado:state });

            tables = tables.filter((e)=>{
                if(e.requests.includes(iduser) || e.members.includes(iduser)){
                   return;
                }
                return e;
            });
            console.log(state)
            return res.status(200).json(tables);
        }catch($e){
            console.log($e)
            return res.status(400).json("error inesperado");
        }
    },

    async indexOfMestre(req,res){
        try{
            const tables = await Table.find({ idMestre:req.headers.mestre });
            return res.status(200).json(tables);
        }catch(e){
            return res.status(400).json("error inesperado");
        }
    },

    async indexOfRequests(req,res){
        try{
            
            
            const { requests } = await Table.findOne({ _id:req.headers.id });
            
            let guests = requests.map((e) => {
                User.findById(e)
                .then(res=>{ 
                    return res;
                })
            });
            
            console.log(guests)


            return res.status(200).json({ "requests": requests});

        }catch(e){
            return res.status(400).json("error inesperado");
        }
    },

    async indexImage(req,res){
        try{

           
            console.log(req.params.image)
            const { avatar } = await Table.findOne({ avatar:req.params.image });
            if (!avatar) {
                return res.status(404).json("404 not found");
            }

            if(avatar != 'default'){
                 fs.readFile(`./src/static/tables/${avatar}.png`, (err, img) => {
                     if (err) return res.status(500).json(err);
                     res.writeHead(200, {
                         "content-type": "image/png"
                     });
                     res.end(img);
                 })
            }else{
                fs.readFile(`./src/static/default/${avatar}.png`, (err, img) => {
                    if (err) return res.status(500).json(err);
                    res.writeHead(200, {
                        "content-type": "image/png"
                    });
                    res.end(img);
                })
            }

        }catch(e){
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
    },

    async getTableByGuest(req,res){
        try{
            const { id } = req.params;

            const table = await Table.find({
                $and:[
                    { members:{ $in:id } }
                ]
            });

            if(!table.length > 0)
            
            return res.status(404).json("not found")
            return res.status(200).json(table);

        } catch($e){
            console.log($e)
            return res.status(400).json($e);
        }
    },

    async getMembers(req,res){
        const {id} = req.params;
        const { members } = await Table.findById(id);
        const users = await User.find({ _id:members });
        res.status(200).json({ users })
    }
}