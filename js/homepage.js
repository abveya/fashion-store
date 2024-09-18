let img=document.querySelector('.img');
function shoses(shoes){
  img.src=shoes;
}
//navboxclick
function showSidebar(){
    const downdropbar = document.querySelector('.downdropbar')
    downdropbar.style.display = 'flex'
  }
  function hideSidebar(){
    const downdropbar = document.querySelector('.downdropbar')
    downdropbar.style.display = 'none'
  }
// slider
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})