import JWT from 'jsonwebtoken';

export function creatToken (username ,email,password){
    return JWT.sign({
        username,
        email    },
    "secretkey"
)


}