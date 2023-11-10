let nom = '';
let display = document.querySelector("#display").value = nom;

function one() {
  nom = nom + '1';
  document.querySelector('#display').value = nom;
}

function two() {
  nom = nom + '2';
  document.querySelector('#display').value = nom;
}

function three() {
  nom = nom + '3';
  document.querySelector('#display').value = nom;
}

function four() {
  nom = nom + '4';
  document.querySelector('#display').value = nom;
}

function five() {
  nom = nom + '5';
  document.querySelector('#display').value = nom;
}

function six() {
  nom = nom + '6';
  document.querySelector('#display').value = nom;
}

function seven() {
  nom = nom + '7';
  document.querySelector('#display').value = nom;
}

function eight() {
  nom = nom + '8';
  document.querySelector('#display').value = nom;
}

function nine() {
  nom = nom + '9';
  document.querySelector('#display').value = nom;
}

function zero() {
  nom = nom + '0';
  document.querySelector('#display').value = nom;
}

function plus() {
  nom = nom + '+';
  document.querySelector('#display').value = nom;
}

function minus() {
  nom = nom + '-';
  document.querySelector('#display').value = nom;
}

function multiply() {
  nom = nom + '*';
  document.querySelector('#display').value = nom;
}

function divide() {
  nom = nom + '/';
  document.querySelector('#display').value = nom;
}

function remove() {
  nom = '';
  document.querySelector('#display').value = nom;
}


function total() {
  nom = eval(nom);
  document.querySelector('#display').value = nom;
}
