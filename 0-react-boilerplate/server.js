import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'
import methodOverride from 'method-override'
import cookieParser from 'cookie-parser'
import webpack from 'webpack'
import {sync as globSync} from 'glob'
import morgan from 'morgan'
import { readFile } from 'mz/fs'
import passport from 'passport'
import OAuth2Strategy from 'passport-oauth2'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { Router, RoutingContext, match } from 'react-router'
import config from './webpack.config.dev'

import routes from './app/routes'


import fetchComponentData from './app/utils/fetchComponentData'

import configureStore from './app/configureStore'
import Html from './app/html'

const clientID = 'c51332c1cea01801b20bb44321a915dddf8f01fe'
const clientSecret = '65743cfac8e684eba4cc09ba275ae797d93878d1'
const gitterHost = 'https://gitter.im'

const app = express()

export let token = null

app.use(session({secret: 'keyboard cat'}))
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(methodOverride())
app.use(cookieParser())
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static('static'))

const proxies = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require)

const compiler = webpack(config)
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))
app.use(require('webpack-hot-middleware')(compiler))

// Log proxy requests

passport.use(new OAuth2Strategy({
  authorizationURL: `${gitterHost}/login/oauth/authorize`,
  tokenURL: `${gitterHost}/login/oauth/token`,
  clientID,
  clientSecret,
  callbackURL: '/login/callback',
  passReqToCallback: true
}, (req, accessToken, refreshToken, profile, done) => {
  token = accessToken
  console.log('token is', accessToken)
  done(null)
}))

passport.serializeUser((user, done) => {
  done(null, JSON.stringify(user));
})

passport.deserializeUser((user, done) => {
  done(null, JSON.parse(user));
})

proxies.forEach((route) => route(app, token))
app.use(morgan('combined'))

app.get('/login/oauth',
  passport.authenticate('oauth2')
);

app.get('/login/callback',
  passport.authenticate('oauth2', {
    successRedirect: '/',
    failureRedirect: '/'
  })
)

app.get('/logout', (req, res) => {
  token = null
});


// app.get('/static/bundle.js', function(req, res) {
//   var raw = fs.createReadStream(path.join(__dirname, 'dist', 'bundle.js'));
//   var acceptEncoding = req.headers['accept-encoding'];
//   if (!acceptEncoding) {
//     acceptEncoding = '';
//   }
//
//   // Note: this is not a conformant accept-encoding parser.
//   // See http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.3
//   if (acceptEncoding.match(/\bdeflate\b/)) {
//     res.writeHead(200, { 'content-encoding': 'deflate' });
//     raw.pipe(zlib.createDeflate()).pipe(res)
//   } else if (acceptEncoding.match(/\bgzip\b/)) {
//     res.writeHead(200, { 'content-encoding': 'gzip' })
//     raw.pipe(zlib.createGzip()).pipe(res)
//   } else {
//     res.writeHead(200, {})
//     raw.pipe(res)
//   }
// })


// app.get('/static/styles.css', function(req, res) {
//   const raw = fs.createReadStream(path.join(__dirname, 'dist', 'styles.css'));
//   var acceptEncoding = req.headers['accept-encoding'];
//   if (!acceptEncoding) {
//     acceptEncoding = '';
//   }
//
//   // Note: this is not a conformant accept-encoding parser.
//   // See http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.3
//   if (acceptEncoding.match(/\bdeflate\b/)) {
//     res.writeHead(200, { 'content-encoding': 'deflate' });
//     raw.pipe(zlib.createDeflate()).pipe(res)
//   } else if (acceptEncoding.match(/\bgzip\b/)) {
//     res.writeHead(200, { 'content-encoding': 'gzip' })
//     raw.pipe(zlib.createGzip()).pipe(res)
//   } else {
//     res.writeHead(200, {})
//     raw.pipe(res)
//   }
// })


// server rendering
app.use((req, res, next) => {
  const store = configureStore()

  // react-router
  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      return res.status(500).send(error.message)
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    }

    if (renderProps === null) {
      return next('err msg: route not found'); // yield control to next middleware to handle the request
    }
    // console.log(renderProps)
    // console.log(renderProps.components)

    // this is where universal rendering happens,
    // fetchComponentData() will trigger actions listed in static "needs" props in each container component
    // and wait for all of them to complete before continuing rendering the page,
    // hence ensuring all data needed was fetched before proceeding
    //
    // renderProps: contains all necessary data, e.g: routes, router, history, components...

    fetchComponentData(store.dispatch, renderProps.components, renderProps)
      .then(() => {
        const state = JSON.stringify(store.getState());
        const innerHtml = renderToString((
          <Provider store={store}>
            <RoutingContext {...renderProps} />
          </Provider>
        ))
        const initView = renderToString((
          <Html
            state={state}
            html={innerHtml} />
        ))

        // console.log(initView);

        // console.log( '\nstate: ', state )

        const page = `<!doctype html> ${initView}`
        // console.log( '\npage:\n', page );

        return page;
      })

    .then(page => res.status(200).send(page))

    .catch(err => res.end(err.message));
  })
})

// <script src="/static/bundle.js"></script>

// example of handling 404 pages


// global error catcher, need four arguments
app.use((err, req, res, next) => {
  console.error("Error on request %s %s", req.method, req.url);
  console.error(err.stack);
  res.status(500).send("Server error");
});

process.on('uncaughtException', evt => {
  console.log( 'uncaughtException: ', evt );
})

app.listen(PORT, () => {
	console.log('Listening on port ' + PORT);
});
