import consola from "consola";
import chalk from "chalk";

export const logger = {
  info: (msg) => consola.info(chalk.cyan(msg)),
  success: (msg) => consola.success(chalk.green(msg)),
  warning: (msg) => consola.warn(chalk.yellow(msg)),
  error: (msg) => consola.error(chalk.red(msg)),
};