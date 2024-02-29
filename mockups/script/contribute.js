const contribute_button = document.getElementById('contribute_button');
const contribute_slides = document.getElementById('contribute_slides');
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
const c_page5 = document.getElementById('contribute_slide5');
const c_page6 = document.getElementById('contribute_slide6');

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