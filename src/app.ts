import pino from 'pino'

const main = async () => {
  const logger = pino()
  logger.info('Hi Boss')
}

main()
