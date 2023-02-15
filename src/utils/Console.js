import * as readline from 'node:readline/promises';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Console = {
  close() {
    rl.close();
  },

  readline(query) {
    return rl.question(query);
  },

  print(message) {
    console.log(message);
  },
};

export default Console;
