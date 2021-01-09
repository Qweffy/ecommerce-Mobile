
const jwt = require("jsonwebtoken");

//controlador para verificar si el usuario logueado es admin

function validadmin (req ,res, next){

  if(req.headers.authorization !== "null"){  // aca pergunta si el token es distinto de null osea si esta logueado
    const token = req.headers.authorization;
    const payload = jwt.decode(token ,"secreto");
    console.log(payload.isAdmin);
    if(!payload.isAdmin){
      return res.status(403).send({message: "No eres admin"})
    }

  }
  else{  //sino el usuario no esta logueado
    return res.status(405).send({message: "No estas logueado"})
  }


  next();
}

module.exports = validadmin;
