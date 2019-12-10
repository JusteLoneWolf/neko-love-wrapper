module.exports = (key) => new Promise((resolve, reject) => {
    const {get} = require('axios')
    if (!key) {
        throw reject(`[Neko-Love] No keywords provided`);
    }
    return get(`https://neko-love.xyz/api/v1/${key}`).then((res) => {
        resolve(res.data.url);
    }).catch(error => {
        if(error.toString().includes('404')){
            reject('[Neko-Love] Unavailable endpoint\n\nEndpoint Available:\n neko,nekolewd,kitsune,pat,hug,waifu,cry,kiss,slap\n\n')
        }else {
            reject(`[Neko-Love] Internal error: ${error.toString()}`);
        }
    })
});