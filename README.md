# 🤖 TikTok Follow Bot

Este é um bot automatizado para seguir e deixar de seguir perfis no TikTok, utilizando **Puppeteer** e **Stealth Plugin** para evitar detecção.

---

## 🚀 **Funcionalidades**

✔️ Acessa automaticamente a página do TikTok.  
✔️ Aguarda o login manual do usuário.  
✔️ Identifica o status atual do botão "Seguir".  
✔️ Alterna automaticamente entre seguir e deixar de seguir.  
✔️ Gera logs detalhados e organizados.

---

## 📂 **Estrutura do Projeto**

```
📂 tiktok-follow-bot
│── 📂 src
│   │── 📂 utils
│   │   ├── logger.js        # Sistema de logs aprimorado
│   │   ├── config.js        # Configurações gerais
│   │── 📂 services
│   │   ├── puppeteerSetup.js # Configuração do Puppeteer
│   │   ├── followService.js  # Lógica de seguir/deixar de seguir
│   │── index.js              # Código principal do bot
│── .env                      # Variáveis de ambiente
│── package.json
│── README.md
```

---

## ⚡ **Requisitos**

- Node.js **18+**
- NPM ou Yarn
- Google Chrome instalado

---

## 📦 **Instalação**

1. Clone o repositório:

   ```sh
   git clone https://github.com/UnkoynX777/tiktok-follow-bot
   cd tiktok-follow-bot
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

---

## ▶️ **Como Usar**

Antes de iniciar o bot, você precisa definir o perfil do TikTok que será seguido e deixado de seguir automaticamente. Para isso, abra o arquivo `config.js` dentro da pasta `src/utils` e edite a seguinte linha:

```js
export const config = {
  TIKTOK_URL: "https://www.tiktok.com/",
  PROFILE_URL: "https://www.tiktok.com/@usuario_alvo", // Substitua 'usuario_alvo' pelo nome de usuário do perfil que deseja seguir e deixar de seguir
  FOLLOW_BUTTON_CSS: ".css-12aeehi-DivButtonPanelWrapper button",
  LOGIN_TIMEOUT: 60000,
  CLICK_INTERVAL: 1000,
  CAPTCHA_TIMEOUT: 10000,
};
```

Certifique-se de inserir o nome exato do usuário do TikTok que deseja que o bot siga e deixe de seguir.

Depois de definir o perfil, inicie o bot executando:

```sh
npm run start
```