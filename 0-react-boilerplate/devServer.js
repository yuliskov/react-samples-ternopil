import path  from 'path'
import express from 'express'
import webpack from 'webpack'
import config from './webpack.config.dev'
import { readFile } from 'mz/fs'

const app = express()
// app.use(express.static('static'))

const compiler = webpack(config)
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', async (req, res) => {
  const html = await readFile(path.join(__dirname, 'html/index.html'), 'utf8')
  const page = html
    .replace(/{{State}}/, '')
    .replace(/{{App}}/, '<main id="root"></main>');
  res.status(200).send(page)
})

app.listen(3000, '0.0.0.0', (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://0.0.0.0:3000')
})
