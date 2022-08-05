import { findRankings } from "../services/rankingService.js"

export async function getRankings(req,res){
 try{
     const { rows : rankings } = await findRankings.rankingsLimit()
     res.status(200).send(rankings)

 }catch(e){
     console.log(e)
     res.sendStatus(500)
 }
}