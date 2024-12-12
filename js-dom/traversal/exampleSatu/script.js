// jika elemen cuma 1
// let closeGambar = document.querySelector('span:last-child');
// let card = document.querySelector('.card');

// // jika ingin hapus elemen
// // closeGambar.addEventListener('click', function(){
// //    card.remove();
// // });

// // jika ingin hidden elemen
// closeGambar.addEventListener('click', function(){
//    card.style.display = "none";
//});

// hapus jika elemen banyak
// Dom Traversal
// const close = document.querySelectorAll('.close');

// for(let i = 0; i < close.length; i++){
//    close[i].addEventListener('click', function(e){
//       //close[i].target.parentElement.style.display =  'none';
  
//       e.target.parentElement.style.display =  'none';
//    })
// }
      
      
// cara lain yang lebih efektif
const close = document.querySelectorAll('.close');

close.forEach(function(elemen){
   elemen.addEventListener("click", function(e){
      e.target.parentElement.style.display =  'none';
   });
});