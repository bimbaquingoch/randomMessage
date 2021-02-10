const messages = ["Main", "Ana", "Salome", "Karol", "Emily"];

const randomMSG = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMSG };
