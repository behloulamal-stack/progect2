export function authM (req ,res,next){
    
    
    if(req.body.key != 'aaaa'){
        res.status(500).json({
            'success ':false ,
            'message' :"user not fond"
        });
      
    }else{
  
        next();
        
    }



}