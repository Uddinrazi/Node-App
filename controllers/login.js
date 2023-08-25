const User = require('../models/user');

const getUserData = async (req, res, next) => {
    try{
    const findUser = await User.findAll()
         res.status(200).json({allUser: findUser})
    } 
catch(err) {
    console.log(err)
    res.status(500).json({error:err})
}
}   
  
const postUserData = async (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const contact = req.body.contact;

    console.log('18 run done')
    console.log(req.body)
    

    const data = await User.create({name: name, contact: contact, email: email});
    res.status(201).json({newUserDetail: data})

    User.save()
}


const deleteUser = async (req, res, next) => {
    const userId = req.params.id;
    const delet = await User.destroy({where: {id: userId}})
     res.sendStatus(200)
}

module.exports = { getUserData, postUserData, deleteUser }
 
 
