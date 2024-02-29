const merch_button = document.getElementById('merch_button');
const merch_slides = document.getElementById('merch_slides');
const button5 = document.getElementById('button5');

merch_button.addEventListener('click', () => {
    info_slides.style.display = 'none';
    contribute_slides.style.display = 'none';
    merch_slides.style.display = 'block';
    merch_button.style.backgroundColor = '#EF7F1A';
    info_button.style.backgroundColor = 'transparent';
    contribute_button.style.backgroundColor = 'transparent';

});

button5.addEventListener('click', () => {
    info_slides.style.display = 'none';
    contribute_slides.style.display = 'none';
    merch_slides.style.display = 'block';
    button6.style.backgroundColor = '#EF7F1A';
    button5.style.backgroundColor = 'transparent';
});


next5.addEventListener('click', () => {
c_page5.style.display = 'none'
c_page6.style.display = 'block'




});

previous5.addEventListener('click', () => {
c_page5.style.display = 'block'
c_page6.style.display = 'none'


});