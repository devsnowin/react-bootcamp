/** eslint-disable */
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import renderApp from './dist/server/ServerApp.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3001;

const html = fs
  .readFileSync(path.resolve(__dirname, './dist/client/index.html'))
  .toString();

const parts = html.split('not render');

const app = express();
app.use(
  '/assets',
  express.static(path.resolve(__dirname, './dist/client/assets'))
);

app.use((req, res) => {
  res.write(parts[0]);

  const stream = renderApp(req.url, {
    onShellReady() {
      // if it is a crawler, do nothing here (if SEO is important)
      stream.pipe(res);
    },
    onShellError() {
      // Error handling goes here
    },
    onAllReady() {
      // if it is a crawler
      // stream.pipe(res)

      res.write(parts[1]);
    },
    onError(err) {
      console.log(err);
    },
  });
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
