import { initBrowser } from "./services/puppeteerSetup.js";
import { checkFollowStatus, toggleFollow } from "./services/followService.js";
import { config } from "./utils/config.js";
import { logger } from "./utils/logger.js";

(async () => {
  logger.info(" Iniciando automação do TikTok...\n");

  const { browser, page } = await initBrowser();

  logger.info(" Acesse o TikTok e faça login.");
  logger.warning(`⏳ Você tem ${config.LOGIN_TIMEOUT / 1000} segundos para se autenticar...`);

  await page.goto(config.TIKTOK_URL, { waitUntil: "networkidle2" })
  await new Promise(resolve => setTimeout(resolve, config.LOGIN_TIMEOUT));

  logger.success(" Login concluído!");
  logger.info(" Acessando perfil...");

  await page.goto(config.PROFILE_URL, { waitUntil: "networkidle2" });
  await new Promise(resolve => setTimeout(resolve, config.CAPTCHA_TIMEOUT));

  logger.success(" Perfil carregado!");
  logger.info(" Verificando status inicial de seguir...\n");

  let isFollowing = await checkFollowStatus(page);

  logger.info(" Alternando entre seguir/deixar de seguir...\n");

  while (true) {
    isFollowing = await toggleFollow(page, isFollowing);
    await new Promise(resolve => setTimeout(resolve, config.CLICK_INTERVAL));
  }

})();