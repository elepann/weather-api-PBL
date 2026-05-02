const redis = require('redis');

//initialisasi client redis
const client = redis.createClient({
    url: "redis://localhost:6379"
});

client.on('error', (err) => {
    console.log('redis client error', err)
});

//koneksi client redis
async function clientConnector() {
    await client.connect();
};

clientConnector();

module.exports = client;