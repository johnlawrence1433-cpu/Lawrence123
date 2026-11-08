const express = require('express');
const app = express();
const port = 3006
const db = require('./models')
const RidersRouter = require('./routes/Riders')
const ProductRouter = require('./routes/Product')
const OrderRouter = require('./routes/Order')


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use('/api/Riders', RidersRouter);
app.use('/api/Product', ProductRouter);
app.use('/api/Order', OrderRouter);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
  console.log(`http://localhost:${port}`)
});
})

