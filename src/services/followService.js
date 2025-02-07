import { config } from "../utils/config.js";
import { logger } from "../utils/logger.js";

export const checkFollowStatus = async (page) => {
  try {
    const buttons = await page.$$(config.FOLLOW_BUTTON_CSS);

    if (buttons.length === 0) {
      logger.warning("⚠ Nenhum botão encontrado para verificar status.");
      return false;
    }

    const buttonText = await page.evaluate(el => el.innerText.toLowerCase(), buttons[0]);
    const isFollowing = buttonText.includes("Follow") || buttonText.includes("Following");

    if (isFollowing) {
      logger.success("Você já está seguindo a conta.");
      return true;
    }

    logger.warning("Você ainda NÃO está seguindo a conta.");
  } catch (error) {
    logger.error(`Erro ao verificar status de seguir: ${error.message}`);
  }
  return false;
};

export const toggleFollow = async (page, isFollowing) => {
  try {
    await page.waitForSelector(config.FOLLOW_BUTTON_CSS, { visible: true, timeout: 5000 });

    const buttons = await page.$$(config.FOLLOW_BUTTON_CSS);

    if (buttons.length === 0) {
      logger.warning("Nenhum botão encontrado para clicar.");
      return isFollowing;
    }

    const followButton = buttons[0];

    await page.evaluate((el) => el.scrollIntoView(), followButton);

    await followButton.click();
    isFollowing = !isFollowing;

    if (isFollowing) {
      logger.success(` Agora você está seguindo!`);
    } else {
      logger.warning(`👋 Deixou de seguir!`);
    }
  } catch (error) {
    logger.error(`Erro ao clicar no botão: ${error.message}`);
  }

  return isFollowing;
};