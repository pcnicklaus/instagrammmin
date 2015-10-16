module.exports = {
  db: process.env.db || 'localhost',
  clientSecret: process.env.clientSecret || 'doh',
  tokenSecret: process.env.tokenSecret || 'pick a hard to guess string'
};
