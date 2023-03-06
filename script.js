const hamburger = document.querySelector(".ham");
const nav_ul = document.querySelector(".nav-ul");
hamburger.addEventListener("click",()=>{
  hamburger.classList.toggle("active");
  nav_ul.classList.toggle("active");
})


window.addEventListener('scroll',()=>{
  let content=document.querySelector('.education');

  let contentposition=content.getBoundingClientRect().top;
  let screenposition=window.innerHeight;
  if(contentposition<screenposition){
    content.classList.add('active')
  }
  else{
    content.classList.remove('active');
  }
})


window.addEventListener('scroll',()=>{
  let content=document.querySelector('.skills');
  let contentposition=content.getBoundingClientRect().top;
  let screenposition=window.innerHeight;
  if(contentposition<screenposition){
    content.classList.add('active')
  }
  else{
    content.classList.remove('active');
  }
})


window.addEventListener('scroll',()=>{
  let content=document.querySelector('.cv');
  let contentposition=content.getBoundingClientRect().top;
  let screenposition=window.innerHeight;
  if(contentposition<screenposition){
    content.classList.add('active')
  }
  else{
    content.classList.remove('active');
  }
})
window.addEventListener('scroll',()=>{
  let content=document.querySelector('.event-pic');
  let contentposition=content.getBoundingClientRect().top;
  let screenposition=window.innerHeight;
  if(contentposition<screenposition){
    content.classList.add('active')
  }
  else{
    content.classList.remove('active');
  }
})
window.addEventListener('scroll',()=>{
  let content=document.querySelector('.hackathon-pic');
  let contentposition=content.getBoundingClientRect().top;
  let screenposition=window.innerHeight;
  if(contentposition<screenposition){
    content.classList.add('active')
  }
  else{
    content.classList.remove('active');
  }
})
window.addEventListener('scroll',()=>{
  let content=document.querySelector('.certificate');
  let contentposition=content.getBoundingClientRect().top;
  let screenposition=window.innerHeight;
  if(contentposition<screenposition){
    content.classList.add('active')
  }
  else{
    content.classList.remove('active');
  }
})


