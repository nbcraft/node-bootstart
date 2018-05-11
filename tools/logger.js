const winston = require('winston');

const config = require('../config/config.json');

const myFormat = winston.format.printf(info => `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`);

module.exports = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.label({ label: config.appName }),
    winston.format.timestamp(),
    winston.format.splat(),
    myFormat,
  ),
  transports: [new winston.transports.Console()],
});
