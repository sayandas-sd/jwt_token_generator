const jwt =require("jsonwebtoken");
const zod = require("zod");
const jwtPassword = "secret";

const emailSche = zod.string().email();
const passwordSche = zod.string().min(2);

function signJwtToken(username,password) {
    const responseEmail = emailSche.safeParse(username);
    const responsePassword = passwordSche.safeParse(password);
    if(!responseEmail.success || !responsePassword.success) {
        return null;
    }
    const token = jwt.sign({username},jwtPassword);
 
    return token;
}

function decodedJwtToken(token){
    const decoded = jwt.decode(token);
    if(decoded){
        return true;
    }else{
        return false;
    }
}

function verifyJwtToken(token) {
    const ans = true;
    try {
        const verified = jwt.verify(token,jwtPassword);
        return true;
    } catch(err) {
       
    }
    return false;
    
}

console.log(signJwtToken("sayan@gmail.com","12345"));

