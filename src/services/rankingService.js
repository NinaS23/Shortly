import { connection } from "../db.js"

async function rankingsLimit() {
    const query = `
    SELECT us.id, us.name, COUNT(ur.*) as "linksCount", COALESCE(SUM(ur.views), 0) as "visitCount"
    FROM users us
    LEFT JOIN urls ur ON ur."userId" = us.id
    GROUP BY us.id
    ORDER BY "visitCount" DESC
    LIMIT 10
    `;

    return connection.query(query, []);
}

export const findRankings = {
    rankingsLimit
}