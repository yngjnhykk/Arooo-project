const express = require('express');
const cors = require('cors');
const contentRouter = require('./routes/library/content');
const db = require('./models');

const app = express();

db.sequelize
  .sync()
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.send('hello express');
});

app.use('/library/content', contentRouter);

app.listen(3066, () => {
  console.log('서버 실행중!');
});
