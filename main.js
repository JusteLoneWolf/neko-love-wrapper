module.exports = (key) => new Promise((resolve, reject) => {
    const {get} = require('axios')
    if (!key) {
        throw reject(`[Neko-Love-Wrapper] No keywords provided`);
    }
    return get(`https://neko-love.xyz/api/v1/${key}`).then((res) => {
        resolve(res.data.url);
    }).catch(error => { reject(`[Neko-Love-Wrapper] Internal error: ${error.toString()}`); });
});