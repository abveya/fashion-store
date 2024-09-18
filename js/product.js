//navboxclick
function showSidebar(){
    const downdropbar = document.querySelector('.downdropbar')
    downdropbar.style.display = 'flex'
  }
  function hideSidebar(){
    const downdropbar = document.querySelector('.downdropbar')
    downdropbar.style.display = 'none'
  }
function toggleFavorite(button) {
    const isFavorite = button.classList.toggle('favorite');
    button.textContent = isFavorite ? 'Added to Favorites' : 'Add to Favorites';
}
