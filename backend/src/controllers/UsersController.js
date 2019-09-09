const Users = require("../models/UsersModel");
const fs  = require("fs");
const jwt = require("jsonwebtoken");
const { secret } = require("../config/key.json");

module.exports = {

    async verifyToken(req,res, next){
        const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.authorization;
        
        if(!token) return res.status(403).json("Token nao encontrado!");

        jwt.verify(token, secret, (err, decoded)=>{
            if(err) return res.status(400).json(err);
            req.decoded = decoded;
            return next();
        });
    },

    async auth(req,res) {
        try{
            const {email, password} = req.body;

            const user = await Users.findOne({ email:email, password:password });
            if(!user) return res.status(400).json({data:"Email ou senha incorretos!"});
            
            const token = jwt.sign({ id:user._id }, secret,{
                expiresIn: 86400
            });

            return res.status(202).json({ token:token, user:user });
        }catch(e){
            return res.status(403).json({data:"Email ou senha incorretos!" });
        }
    },

    async store(req,res){
        const data  = req.body;
        const { avatar } = req.files;
        const exists = await Users.findOne({ email:data.email });
        console.log(req.headers);
        if (exists) return res.status(400).json("Usuario ja existe");
        
        const date = new Date();
        const image = date.getTime() + "_" + avatar.originalFilename;
        const originPath = avatar.path;
        const destinyPath = "./src/static/users/" + image + ".png";

        fs.rename(originPath, destinyPath, (err) => {
            if (err) return err;
        });

        data.avatar = image; 
        
        const user = await Users.create(data);
        return res.status(201).json({message:"Usuario Criado com sucesso!" , user:user });
    },

    async indexOfLike(req,res){
        const users = await Users.find({ estado:req.params.state });
        return res.status(200).json({users:users});
    },

    async indexOne(req,res){
        try{
            
            const user = await Users.findById(req.params.id);
            return res.status(200).json({
                user: user
            });

        }catch($e){
            return res.status(400).json("Erro inesperado");
        }    
    }
} 