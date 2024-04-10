const main = document.querySelector('#main');
main.remove();
const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id = 'victory';
newHeader.innerHTML = `<p>Derrick is the champion</p>`;
