// Navbar shadow on scroll
window.addEventListener('scroll',()=>{
  const nav=document.querySelector('.ff-nav');
  if(window.scrollY>30){nav.style.boxShadow='0 6px 20px rgba(0,0,0,.5)';}
  else{nav.style.boxShadow='none';}
});
