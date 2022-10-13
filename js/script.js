
const container = document.querySelector('.lf-container');

const limit = 100;

for(let i = 1; i <= limit; i++) {

  const box = document.createElement('div');
 
  box.className = 'box';

  if(!(i % 15)) {
    box.classList.add('red');
    box.innerHTML = 'fizzbuzz';
  } else if(!(i % 5)) {
    box.classList.add('yellow');
    box.innerHTML = 'buzz';
  } else if(!(i % 3)) {
    box.classList.add('green');
    box.innerHTML = 'fizz';
  } else {
    box.classList.add('azure');
    box.innerHTML = i;
  }

  container.append(box);
}