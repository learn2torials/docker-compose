const redis = require('redis');
const express = require('express');

const app = express();
const client = redis.createClient({
  port: 6379,
  host: 'redis-server'
});

// Set default visits
client.set('visits', 0);

// increment visits on each
// visits of the user
app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

// listen on 3000
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
