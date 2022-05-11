exports.checkApiKey = (req,res,next)=>{

    if(!req.body.apiKey){
           return res.status(403).send("No Api Key Provided")
    }

    if(req.body.apiKey !== process.env.API_KEY){
        return res.status(403).send("Please provide a valid Api Key")
    }

    next();

}