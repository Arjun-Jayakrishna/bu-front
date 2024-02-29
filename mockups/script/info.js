const info_button = document.getElementById('info_button');
const info_slides = document.getElementById('info_slides');

info_button.addEventListener('click', () => {
    info_slides.style.display = 'block';
    contribute_slides.style.display = 'none';
    merch_slides.style.display = 'none';
    info_button.style.backgroundColor = '#EF7F1A';
    contribute_button.style.backgroundColor = 'transparent';
    merch_button.style.backgroundColor = 'transparent';
});