function scaleThumb() {
    const heartIcon = document.querySelector('.dislike-icon');
    heartIcon.classList.add('scale-thumb'); 
    
    setTimeout(() => {
      heartIcon.classList.remove('scale-thumb');
    }, 2000); 
  }