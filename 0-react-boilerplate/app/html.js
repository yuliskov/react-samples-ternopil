import React, {
  PropTypes
} from 'react'

const Html = ({state, html}) => {
  return (
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.3.15/slick.css" />
        <link rel="stylesheet" type="text/css" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="stylesheet" type="text/css" href="/static/styles.css" />
      </head>
      <body>

        <script
          dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__ = ${state};`}} />
        <div id="root" dangerouslySetInnerHTML={{__html: html}} />

        <script src="/static/bundle.js" />
      </body>
    </html>
  )
}

Html.propTypes = {
  state: PropTypes.string
}

export default Html
