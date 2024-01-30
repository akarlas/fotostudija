
const isMobile = {
  Android: function(){
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry:function(){
    return navigator.userAgent.match(/BlackBerry/i);
  }, 
  iOS: function(){
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera:function(){
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows:function(){
    return navigator.userAgent.match(/IEMobile/i);
  },
  any:function(){
    return(
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows());
  },
};
// ----------------------------------//
if (isMobile.any()) {
  document.body.classList.add('_touch');
 } else {
  document.body.classList.add('_pc');
 }
// ----------------------------------//
const headerItems = document.querySelectorAll('.header_item[data-goto]')
if (headerItems.length > 0){
headerItems.forEach(headerItem => {
  headerItem.addEventListener("click", onHeaderItemClick)
});
}
function onHeaderItemClick(e) {
  const headerItem = e.currentTarget;
  if(headerItem.dataset.goto && document.querySelector(headerItem.dataset.goto)){
    const gotoBlock = document.querySelector(headerItem.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth"
    });
    e.preventDefault()
  }
}
