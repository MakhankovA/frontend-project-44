import readlineSync from 'readline-sync';

const sayGreetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?\n', {
    defaultInput: 'User',
  });

  console.log(`Hello,${name}!`);
};

export default sayGreetings;
