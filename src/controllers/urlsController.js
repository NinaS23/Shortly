import 'dotenv/config';


export async function shortUrl(req,res){
 const { url } = req.body
 try{

   res.sendStatus(200)
 }catch(e){
     console.log(e)
    res.status(500).send(e)
 }
}