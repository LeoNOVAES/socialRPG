const Users = require("../models/UsersModel");
const Tables = require("../models/TableModels");

module.exports = {
    async store(req,res){
        try{
            const { id,mesa } = req.headers;
        
            const user = await Users.findById(id); 
            const table = await Tables.findById(mesa);
            if (!table) return res.status(400).json("mesa nao existe");
            if(table.estado != user.estado) return res.status(400).json("Estados diferentes nao dao match!");

            user.likes.push(table._id);
            await user.save();

            table.requests.push(user._id);
            await table.save();

            return res.status(200).json(user);
        }catch(e){
            return res.status(400).json(e.message)
        }
    },

    async acceptMember(req,res){
        try{
            const {user, mesaid, mestre} = req.headers;

            const mesa = await Tables.findById(mesaid);

            if(mesa.idMestre != mestre) return res.status(403).json("Essa mesa nao te pertence"); 

            if (mesa.requests.includes(user)) {
                mesa.members.push(user);
                const requests = mesa.requests.filter((e)=>{
                    return e != user
                });
                mesa.requests = requests;
                
                mesa.save();
            }

            return res.status(200).json("Jogador adicionado a mesa!");
        }catch(e){
            return res.json(e.message);
        }
    },

    async recuseMember(req,res){
        try{
            const { user,mesaid,mestre } = req.headers;

            const mesa = await Tables.findById(mesaid);
            const u = await Users.findById(user);

            if (mesa.idMestre != mestre) return res.status(403).json("Essa mesa nao te pertence");

            if (mesa.requests.includes(user)) {
                const requests = mesa.requests.filter((e) => {
                    return e != user
                });
                mesa.requests = requests;
                mesa.save();
                
                u.dislike.push(mesa._id);
                u.save()
            }

            return res.status(200).json("Jogador recusado!");

        }catch(e){
            return res.status(400).json(e.message);
        }
    },
    
    async removeMember(req, res) {
        try {
            const { user,mesaid,mestre } = req.headers;

            const mesa = await Tables.findById(mesaid);

            if (mesa.idMestre != mestre) return res.status(403).json("Essa mesa nao te pertence");

            if (mesa.requests.includes(user)) {
                const members = mesa.members.filter((e) => {
                    return e != user
                });
                mesa.members = members;

                mesa.save();
            }

            return res.status(200).json("Jogador removido da mesa!");
        } catch (e) {
            return res.json(e.message);
        }
    }
}