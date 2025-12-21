const mongose =require('mongoose')

 const UserSchema = mongose.Schema({

    name : {
        type : String,
        required : true
    },
    email :{
type : String,
        require : true,
        unique : true
    },
    password :{
        type : String,
        require : true,
        
    }
 },{timestamps : true})

 const User = mongose.model('User' ,UserSchema);
  
 module.exports = User;