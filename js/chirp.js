function chirp(n){
  var trim;
  if(n === 0){
    return ' ';
  }
   return 'chirp ' + chirp(--n);
  // FIX ME
}

chirp(3);

$(document).ready(function(){
  $("#result").html(chirp(3));
});