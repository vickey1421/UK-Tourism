// JAVA SCRIPT 


burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
pages=document.querySelector('.pages');
navSearch=document.querySelector('.nav-search');

burger.addEventListener('click',()=>{
pages.classList.toggle('visibility')
navSearch.classList.toggle('visibility')
navbar.classList.toggle('h-nav')


});