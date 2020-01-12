#! /user/bin/env node

/*
This file represents the interface between the application and the environment (Node and Linux). Including:
- Conversion of ECMAScript Modules (import/export syntax) to CommonJS (require())
- Handling SIGINT and SIGTERM signals (waits for open sockets to close before exiting)
- Gathering configuration settings from environment variables or other sources and passing them to src/index.js
*/

// Use ESM instead of CommonJS modules in API source code
/* eslint-disable-next-line */
require = require('esm')(module/*, options*/)

// Gather configuration settings from environment variables (or use defaults)
const { NODE_ENV = 'development' } = process.env

// Pass configuration to application
require('../src/index.js').default({ env: NODE_ENV })

// Need this in docker container to properly exit since Node doesn't handle SIGINT/SIGTERM
// (this also won't work when using npm start)
const gracefulShutdown = () => process.exit()

// Quit on ctrl-c when running docker in terminal
process.on('SIGINT', () => {
  console.info('Got SIGINT. Graceful shutdown ', new Date().toISOString())
  gracefulShutdown()
})

// Quit properly on docker stop
process.on('SIGTERM', () => {
  console.info('Got SIGTERM. Graceful shutdown ', new Date().toISOString())
  gracefulShutdown()
})
