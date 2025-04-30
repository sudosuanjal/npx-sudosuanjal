#!/usr/bin/env node

import figlet from "figlet";
import chalk from "chalk";

console.log(
  chalk.cyan(
    figlet.textSync("sudosuanjal", {
      horizontalLayout: "default",
      verticalLayout: "default",
    })
  )
);

console.log(
  chalk.green(`
Hey, I'm Anjal!
🚀 Builder | CSE Student

🌐 Portfolio: https://sudosuanjal.vercel.app
🐦 Twitter: @sudosuanjal
💼 LinkedIn: https://linkedin.com/in/sudosuanjal
`)
);
