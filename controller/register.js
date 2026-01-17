export const register = async (req, res) => {
       const { username, email, password } = req.body;
       const users =[];
     
       const findUser = users.find((u) => u.email === email);
       if (findUser) {
           return res.status(400).json({
              message : 'User already exists',
              success : false
           });}
              users.push({ username, email, password });

       res.status(200).json({
           success: true,
           message: "User registered successfully",
           user: users
       });
       
       
}