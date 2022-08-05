import { selectToken } from "../services/tokenService.js";

export async function tokenValidate(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer", "").trim();
    try {

        const { rows } = await selectToken.geyTOken('token', token);
        if (!token || rows.length === 0) {
            return res.status(401).send("Token inválido!");
        }

        res.locals.token = token;
    } catch (e) {
        console.log(e);
        res.status(500).send("xabu")
    }

    next();
}