import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import { logger } from "../utils/logger.js";

puppeteer.use(StealthPlugin());

export const initBrowser = async () => {
  logger.info(" Inicializando navegador...");
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--start-maximized"],
  });

  const page = await browser.newPage();

  return { browser, page };
};