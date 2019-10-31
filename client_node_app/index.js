var Redis = require("ioredis");
var redis = new Redis(
{
  sentinels: [{ host: 'redis-sentinel-1', port: 26379 }, { host: 'redis-sentinel-2', port: 26379 }, { host: 'redis-sentinel-3', port: 26379 }],
  name: 'mymaster',
  connectTimeout: 10000
});

setInterval(() => {
	try{
		redis.set('now', Date());
		console.log('sent data to master!');
	}
	catch(e) {
		console.log('redis connection failed!');
	}
},1000);