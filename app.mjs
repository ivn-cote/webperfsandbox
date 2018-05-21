import express from 'express';
import reactViews from 'express-react-views';
import { brakeMiddleware } from './utils/middlewares';

const app = express();

app.set('views', './views');
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

app.use(brakeMiddleware);

app.get('/', (req, res) =>
  res.render('index', {
    title: 'default page'
  })
);

app.listen(3001, () => console.log('#webperf sandbox app is listening on port 3001'))
