const info_button = document.getElementById('info_button');
const info_slide = document.getElementById('info_slide');

const contribute_button = document.getElementById('contribute_button');
const contribute_slide = document.getElementById('contribute_slide');
const next1 = document.getElementById('con-c-next1');
const next2 = document.getElementById('con-c-next2');
const next3 = document.getElementById('con-c-next3');
const next5 = document.getElementById('con-c-next5');
const previous2 = document.getElementById('con-c-previous2');
const previous3 = document.getElementById('con-c-previous3');
const c_page1 = document.getElementById('contribute_slide1');
const c_page2 = document.getElementById('contribute_slide2');
const c_page3 = document.getElementById('contribute_slide3');
const c_page4 = document.getElementById('contribute_slide4');
const c_page5 = document.getElementById('con-c-page5');




const merch_button = document.getElementById('merch_button');
const merch_slides = document.getElementById('merch_slides');
const button5 = document.getElementById('button5');

info_button.addEventListener('click', () => {
    info_slides.style.display = 'block';
    contribute_slides.style.display = 'none';
    merch_slides.style.display = 'none';
    info_button.style.backgroundColor = '#EF7F1A';
    contribute_button.style.backgroundColor = 'transparent';
    merch_button.style.backgroundColor = 'transparent';
});

contribute_button.addEventListener('click', () => {
    info_slides.style.display = 'none';
    contribute_slides.style.display = 'block';
    merch_slides.style.display = 'none';
    contribute_button.style.backgroundColor = '#EF7F1A';
    info_button.style.backgroundColor = 'transparent';
    merch_button.style.backgroundColor = 'transparent';
});

next1.addEventListener('click', () => {
c_page1.style.display = 'none'
c_page2.style.display = 'block'
c_page3.style.display = 'none'
c_page4.style.display = 'none'


});

next2.addEventListener('click', () => {
c_page1.style.display = 'none'
c_page2.style.display = 'none'
c_page3.style.display = 'block'
c_page4.style.display = 'none'


});

next3.addEventListener('click', () => {
c_page1.style.display = 'none'
c_page2.style.display = 'none'
c_page3.style.display = 'none'
c_page4.style.display = 'block'


});

previous2.addEventListener('click', () => {
c_page1.style.display = 'block'
c_page2.style.display = 'none'
c_page3.style.display = 'none'
c_page4.style.display = 'none'


});

previous3.addEventListener('click', () => {
c_page1.style.display = 'none'
c_page2.style.display = 'block'
c_page3.style.display = 'none'
c_page4.style.display = 'none'

});

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