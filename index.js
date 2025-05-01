#!/usr/bin/env node

import chalkAnimation from "chalk-animation";
import chalk from "chalk";
import figlet from "figlet";

const text = figlet.textSync("sudosuanjal");

const rainbow = chalkAnimation.pulse("Welcome to sudosuanjal CLI!", 2);
setTimeout(() => {
  rainbow.stop();

  const animated = chalkAnimation.radar(text);
  setTimeout(() => {
    animated.stop();
    console.log(
      chalk.black(`
Hey, I'm Anjal!
🚀 Web3 Builder | CSE Student

🌐 Portfolio: https://sudosuanjal.vercel.app/
🐦 Twitter: @sudosuanjal
💼 LinkedIn: https://linkedin.com/in/sudosuanjal
  `)
    );
  }, 7000); // Stop after 3 seconds
}, 2500);
