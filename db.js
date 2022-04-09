const db = require('mongoose');
db.Promise = global.Promise;

async function connect(url){
    await db.connect(url, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log('[db] conectada con exito')
    })
    .catch(error => console.error('[db]', error));
};

module.exports = connect;