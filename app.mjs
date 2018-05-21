import express from 'express';
import reactViews from 'express-react-views';
import { brakeMiddleware } from './utils/middlewares';

const DEFAULT_PORT = 3001;
const app = express();

app.set('views', './views');
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

app.use(brakeMiddleware);

const options = {
  etag: false,
  extensions: ['js', 'css'],
  lastModified: false,
  index: false,
  maxAge: '0'
};

app.use(express.static('public', options));

app.get('/', (req, res) =>
  res.render('index', {
    title: 'default page',
    css: ['dummy.css'],
    js: ['dummy.js']
  })
);

app.listen(DEFAULT_PORT, () => console.log(`#webperf sandbox app is listening on port ${DEFAULT_PORT}`))
