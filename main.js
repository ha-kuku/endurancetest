const nobutton = document.querySelector('.no');

nobutton.addEventListener('mouseenter', () => {
  const randomX = Math.floor(Math.random() * 101 - 50);
  const randomY = Math.floor(Math.random() * 101 - 50);

  nobutton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

function showImage() {
  const image = document.getElementById('dorian');
  image.style.display = 'block';
}
