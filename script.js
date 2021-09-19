const openTab = document.querySelector('.card-flex');
const closeTab = document.querySelector('.mobile-share');
const desktopShares = document.querySelector('.desktop-share')
const sharIcon = document.querySelector('.svg-icon');

openTab.addEventListener('click', function (){
   if(window.innerWidth < 1000){
    openTab.style.display = 'none';
    closeTab.style.display ='flex';
   }
});
closeTab.addEventListener('click', function(){
 closeTab.style.display = 'none';
 openTab.style.display = 'flex'
})

sharIcon.addEventListener('click', function(){
 if(window.innerWidth > 1000){
   if(desktopShares.style.display === 'none'){
      desktopShares.style.display = 'flex';
   }
   else{
      desktopShares.style.display = 'none';
   }
 }
})