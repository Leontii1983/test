let greet = 'Hi';
let nameUser = 'Dave';
let question = 'How are you?';

function showWords(greet, nameUser, question) {
  let grString = `"${greet} ${nameUser} ${question}"`;
  let dIn = document.querySelector('#temp');
  dIn.innerHTML = grString;
}

showWords(greet, nameUser, question);