import main from './main'

/*
This file represents the interface between the application and the environment (Ex: Node and Linux/Docker):
- Handles SIGINT and SIGTERM signals (waits for open sockets to close before exiting)
- Gathers configuration settings from environment variables or other sources and passing them to src/index.js
*/

// Gather configuration settings from environment variables (or use defaults)
const { NODE_ENV = 'development' } = process.env

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

const start = async (config: any): Promise<void> => {
  await main(config)
  gracefulShutdown()
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
start({ env: NODE_ENV, args: process.argv.slice(2) })
