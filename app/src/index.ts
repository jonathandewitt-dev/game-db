/*
This file represents the interface between the application and the environment (Ex: Node and Linux). Including:
- Handling SIGINT and SIGTERM signals (waits for open sockets to close before exiting)
- Gathering configuration settings from environment variables or other sources and passing them to src/index.js
*/

// Gather configuration settings from environment variables (or use defaults)
const { NODE_ENV = 'development' } = process.env

// Pass configuration to application
require('./main').default({ env: NODE_ENV })

// Need this in docker container to properly exit since Node doesn't handle SIGINT/SIGTERM
// (this also won't work when using npm start)
const gracefulShutdown = (): never => process.exit()

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
