console.log('hello')
const projects = document.getElementsByClassName('card');

[...projects].forEach((card) => {
  card.addEventListener("click", function () {
    card.classList.toggle('is-flipped');
  });
  card.addEventListener("keydown" ,function (e) {
    if(e.key === 'Enter')
      card.classList.toggle('is-flipped');
  });
})