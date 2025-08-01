const { default: makeWASocket } = require("@whiskeysockets/baileys");

async function startBot() {
  const sock = makeWASocket();

  sock.ev.on("messages.upsert", ({ messages }) => {
    const msg = messages[0];
    if (!msg.message) return;

    const messageContent = msg.message.conversation || "";
    if (messageContent === ".ping") {
      sock.sendMessage(msg.key.remoteJid, { text: "pong!" });
    }
  });
}

startBot();
