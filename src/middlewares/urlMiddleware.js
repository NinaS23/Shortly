import { urlSchema } from "../schemas/urlSchema.js"


export async function urlVerify(req, res, next) {
    const {url} = req.body;
try{
    
    const { error } = urlSchema.validate({url});
    if (error){
        return res.status(422).send(error)
    } 
    
    next();
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }

}