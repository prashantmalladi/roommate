const app = require('express')();

require('./src/server/init')(app);

const PORT = process.env.PORT || 3000;

console.log('Starting server...');
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
