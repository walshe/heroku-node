const http = require('http');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Hello World ${JSON.stringify(process.env)}`);
});

// const options = {
//     host: 'redis://redistogo:8b631a87e92bffe53e60ea22c2d0fe22@crestfish.redistogo.com:9298/',
//     retryStrategy: (times) => Math.min(times * 50, 2000),
//     tls: { checkServerIdentity: () => undefined },
// };

// const { RedisPubSub } = require("graphql-redis-subscriptions");
// const Redis = require("ioredis");

// const redisPubSub = new RedisPubSub({
//     publisher: new Redis(options),
//     subscriber: new Redis(options),
// });

var rtg   = require("url").parse('redis://redistogo:8b631a87e92bffe53e60ea22c2d0fe22@crestfish.redistogo.com:9298/');
var redis = require("redis").createClient(rtg.port, rtg.hostname);

console.log(redis)

redis.auth(rtg.auth.split(":")[1]);

console.log('auth worked')

server.listen(port, () => {
    console.log(`...Server running at http://${hostname}:${port}/`);
});