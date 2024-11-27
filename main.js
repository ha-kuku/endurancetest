const nobutton = document.querySelector('.no');

nobutton.addEventListener('mouseenter', () => {
  const randomX = Math.floor(Math.random() * 101 - 50);
  const randomY = Math.floor(Math.random() * 101 - 50);

  nobutton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

const yesbutton = document.querySelector('.yes');

yesbutton.onclick = function () {
  alert(poo);
};
