1. How to Enable Hot Reloading
   // App.jsx

import { hot } from 'react-hot-loader/root'

// ...

export default hot(App)

// .babelrc

{
"plugins": ["react-hot-loader/babel"]
// ...
}

// package.json

{
"dependencies": {
"react-hot-loader": "^4.8.3",
"@hot-loader/react-dom": "^16.8.6"
// ...
}
// ...
}

// webpack.config.js

{
// ...
resolve: {
alias: {
'react-dom': '@hot-loader/react-dom'
}
}
}
