const chatSchema = require('../models/chat')

const saveMessage = async (req, res) =>{
    try{
        var chat = new chatSchema(req.body);
        await chat.save();
        res.send("Message Stored Successfully");
    }catch(e){
        console.log("Error: ",e);
        res.send(e);
    }
}


const getMessages = async (req, res) =>{
    try{
        var chat = await chatSchema.find(req.body);
        if(chat){
            res.send(chat);
        }
        else{
            res.send("No Chat Found!");
        }
    }catch(e){
        console.log("Error:",e);
        res.send(e);
    }
}


exports.saveMessage = saveMessage;
exports.getMessages = getMessages;


