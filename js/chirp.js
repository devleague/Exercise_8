function chirp(n){
  if (n === 0) {
    return ' ';
  }
  return 'chirp ' + chirp(--n);
}
//   let chirping = 'chirp ';
//   // FIX ME
//   if (n === 0) {
//     return;
//   }
  
//   if (n === 1) {
//     return chirping;
//   } else {
//     return chirping + chirp(--n)
//   }
  
// }


$(document).ready(function(){
  $("#result").html(chirp(3));
});