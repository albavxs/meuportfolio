let trilho = document.getElementById('trilho')
let body = document.querySelector('body')


trilho.addEventListener('click', () => {

    trilho.classList.toggle('light');
    body.classList.toggle('light');

});
