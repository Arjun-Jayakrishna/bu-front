const button1 = document.getElementById('button1');
const paragraph1 = document.getElementById('paragraph1');

const button2 = document.getElementById('button2');
const paragraph2 = document.getElementById('paragraph2');
const next1 = document.getElementById('con-c-next1');
const next2 = document.getElementById('con-c-next2');
const next3 = document.getElementById('con-c-next3');
const next5 = document.getElementById('con-c-next5');
const previous2 = document.getElementById('con-c-previous2');
const previous3 = document.getElementById('con-c-previous3');
const c_page1 = document.getElementById('con-c-page1');
const c_page2 = document.getElementById('con-c-page2');
const c_page3 = document.getElementById('con-c-page3');
const c_page4 = document.getElementById('con-c-page4');
const c_page5 = document.getElementById('con-c-page5');




const button3 = document.getElementById('button3');
const paragraph3 = document.getElementById('paragraph3');
const button5 = document.getElementById('button5');

button1.addEventListener('click', () => {
    paragraph1.style.display = 'block';
    paragraph2.style.display = 'none';
    paragraph3.style.display = 'none';
    button1.style.backgroundColor = '#EF7F1A';
    button2.style.backgroundColor = 'transparent';
    button3.style.backgroundColor = 'transparent';
});

button2.addEventListener('click', () => {
    paragraph1.style.display = 'none';
    paragraph2.style.display = 'block';
    paragraph3.style.display = 'none';
    button2.style.backgroundColor = '#EF7F1A';
    button1.style.backgroundColor = 'transparent';
    button3.style.backgroundColor = 'transparent';
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

button3.addEventListener('click', () => {
    paragraph1.style.display = 'none';
    paragraph2.style.display = 'none';
    paragraph3.style.display = 'block';
    button3.style.backgroundColor = '#EF7F1A';
    button1.style.backgroundColor = 'transparent';
    button2.style.backgroundColor = 'transparent';

});

button5.addEventListener('click', () => {
    paragraph1.style.display = 'none';
    paragraph2.style.display = 'none';
    paragraph3.style.display = 'block';
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