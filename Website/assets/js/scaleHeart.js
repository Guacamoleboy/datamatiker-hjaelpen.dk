function scaleHeart() {
  const heartIcon = document.querySelector('.like-icon');
  heartIcon.classList.add('scale-heart'); 
  
  setTimeout(() => {
    heartIcon.classList.remove('scale-heart');
  }, 2000); 
}